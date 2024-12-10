'use client';
import useRentModal from '@/hooks/useRentModal';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from './Modal';
import Heading from '../Heading';

import CategoryInput from '../inputs/CategoryInput';
import { getCategory } from '@/actions/categories/getCategories';
import { getIcon } from '../navbar/Categories';
import SearchBar from '../inputs/SearchBar';
import { LocationData } from '@/app/listings/[listingId]/ListingClient';
import dynamic from 'next/dynamic';
import Input from '../inputs/Input';
import { Divider } from '@mui/material';
import CountrySelect from '../inputs/CountrySelect';
import Counter from '../inputs/Counter';
import { getAmenityGroup } from '@/actions/amenity/getAmenityGroup';
import ImageUpload from '../inputs/ImageUpload';
import { TbPhotoPlus } from 'react-icons/tb';
import Image from 'next/image';
import DiscountInput from '../inputs/DiscountInput';
import PropertyCardPreview from '../properties/PropertyCardPreview';
import { ListDoneIcon, SetUpCalenderIcon, SetUpSystemIcon } from '../Icon';
import PreviewModal from './PreviewModal';
import usePreviewModal from '@/hooks/usePreviewModal';
import { createProperty } from '@/actions/property/createProperties';
import toast from 'react-hot-toast';

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    AMENITY = 3,
    IMAGES = 4,
    DESCRIPTION = 5,
    PRICE = 6,
    DISCOUNT = 7,
    RECEIPT = 8,
}

interface RentModalProps {
    currentUser: SafeUser;
}

const RentModal: React.FC<RentModalProps> = ({ currentUser }) => {
    const router = useRouter();
    const rentModal = useRentModal();
    const previewModal = usePreviewModal();
    //UseState
    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState<boolean[]>([]);
    const [categories, setCategories] = useState<SafeCategory[]>();
    const [locationData, setLocationData] = useState<LocationData | null>(null);
    const [amenity, setAmenity] = useState<GroupAmenity | null>(null);
    const [imageGroup, setImageGroup] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            city: '',
            address: '',
            country: '',
            maxGuests: 1,
            numBedrooms: 1,
            amenityList: [],
            numBathrooms: 1,
            images: [],
            pricePerNight: 1,
            title: '',
            description: '',
        },
    });

    //Watch
    const category = watch('category');
    const location = watch('location');
    const guestCount = watch('maxGuests');
    const numBedrooms = watch('numBedrooms');
    const numBathrooms = watch('numBathrooms');
    const images = watch('images');
    const pricePerNight = watch('pricePerNight');
    const city = watch('city');
    const title = watch('title');
    const amenityList = watch('amenityList');
    const address = watch('address');
    const country = watch('country');
    const currentList = watch('amenityList') || [];

    const handleAmenitySelect = (amenityId: string) => {
        const uploadSelectAmenity = currentList.includes(amenityId)
            ? currentList.filter((id: string) => id !== amenityId)
            : [...currentList, amenityId];
        setCustomValue('amenityList', uploadSelectAmenity);
    };

    const handleCitySelect = (data: LocationData) => {
        setLocationData(data);
        const city = data.label || '';
        const address = data.region || '';
        setCustomValue('city', city);
        setCustomValue('address', address);
        setCustomValue('country', data.label);
    };

    const handleRemoveImage = (index: number) => {
        setImageGroup((prev) => {
            const updatedImages = prev.filter((_, i) => i !== index);
            setCustomValue('images', updatedImages);
            return updatedImages;
        });
    };

    //useMemo
    const Map = useMemo(() => dynamic(() => import('@/components/Map'), { ssr: false }), []);

    //useEffect
    useEffect(() => {
        const controller = new AbortController();
        const fetchCategories = async () => {
            try {
                const categories = await getCategory();
                const groupAmenity = await getAmenityGroup();
                setCategories(categories);
                setAmenity(groupAmenity);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
        return () => controller.abort();
    }, []);

    useEffect(() => {
        let debounceTimeout: NodeJS.Timeout;
        const fetchCoordinates = async () => {
            if (!city && !address) return;

            try {
                const inputValue = `${city} ${address}`;
                const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(inputValue)}.json`;
                const response = await fetch(`${url}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}&limit=1`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch coordinates: ${response.statusText}`);
                }

                const data = await response.json();

                if (data.features && data.features.length > 0) {
                    const coordinates = data.features[0].geometry.coordinates;
                    setLocationData({
                        value: inputValue,
                        label: data.features[0].place_name,
                        flag: '',
                        latlng: [coordinates[1], coordinates[0]],
                        region: data.features[0].context?.[0]?.text || '',
                    });
                }
            } catch (error) {
                console.error('Lỗi khi lấy tọa độ:', error);
            }
        };

        debounceTimeout = setTimeout(fetchCoordinates, 300);
        return () => clearTimeout(debounceTimeout);
    }, [city, address]);

    const setCustomValue = useCallback(
        (id: string, value: any) => {
            setValue(id, value, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
            });
        },
        [setValue],
    );

    const onBack = () => {
        setStep((value) => value - 1);
    };
    const onNext = () => {
        setStep((value) => value + 1);
    };
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (step !== STEPS.RECEIPT) {
            return onNext();
        }
        try {
            const result = await createProperty(data, currentUser);
            if (!result) {
                toast.error('bạn đã thêm thất bại vui lòng xem lại thông tin đã nhập');
            } else {
                toast.success('thêm bài đăng căn hộ thành công');
                rentModal.onClose();
            }
        } catch (error) {
            console.error('Lỗi khi gửi form:', error);
        }
    };
    const actionLabel = useMemo(() => {
        if (step === STEPS.RECEIPT) {
            return 'create';
        }
        return 'Next';
    }, [step]);
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }
        return 'Back';
    }, [step]);

    const handleAddImage = (newImage: string) => {
        setImageGroup((prev) => {
            const updatedImages = [...prev, newImage];
            setCustomValue('images', updatedImages);
            return updatedImages;
        });
    };

    const toggleImageMenu = (index: number) => {
        setIsOpen((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const renderCategoryStep = () => (
        <div className="flex flex-col gap-8">
            <Heading title="Hãy mô tả chính xác nhất về nơi ở của bạn?" subtitle="Chọn 1 chủ đề" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
                {categories?.map((item, index) => {
                    const Icon = getIcon(item.icon);
                    if (!Icon) return null;
                    return (
                        <div key={index} className="col-span-1">
                            <CategoryInput
                                onClick={(category) => setCustomValue('category', category)}
                                selected={category === item._id}
                                label={item.name}
                                icon={Icon}
                                id={item?._id}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderLocationStep = () => (
        <div className="flex flex-col justify-center items-center gap-4 h-[60vh]">
            {!locationData ? (
                <SearchBar onCitySelect={handleCitySelect} />
            ) : (
                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <CountrySelect
                        onCountrySelect={(data) => {
                            setCustomValue('country', data.label);
                            setLocationData(data);
                        }}
                        selectedCountry={locationData}
                    />
                    <div className="flex flex-col gap-1 w-full items-center">
                        <Input
                            id="city"
                            label="Thành phố"
                            type="text"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            value={watch('city')}
                            onChange={(value) => setCustomValue('city', value)}
                        />
                        <Input
                            id="address"
                            label="Địa chỉ"
                            type="text"
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            value={watch('address')}
                            onChange={(value) => setCustomValue('address', value)}
                        />
                    </div>
                </div>
            )}
            <Divider />
            <div className="w-full h-full">
                <Map locationData={locationData} />
            </div>
        </div>
    );
    const renderInfoStep = () => (
        <div>
            <div className="flex flex-col gap-8">
                <Heading title="Hãy bắt đầu với những điều cơ bản" subtitle="Bao nhiêu người có thể ở tại đây" />
                <Counter
                    value={guestCount}
                    title="Khách"
                    subtitle="Sô khách tối đa có thể ở"
                    onChange={(value) => setCustomValue('maxGuests', value)}
                />
                <hr />
                <Counter
                    value={numBedrooms}
                    title="Phòng"
                    subtitle="Số phòng có thể ngủ"
                    onChange={(value) => setCustomValue('numBedrooms', value)}
                />
                <hr />
                <Counter
                    value={numBathrooms}
                    title="Phòng tắm"
                    subtitle="Số phòng tắm"
                    onChange={(value) => setCustomValue('numBathrooms', value)}
                />
            </div>
        </div>
    );

    const renderAmenityStep = () => (
        <div className="flex flex-col gap-8 ">
            <Heading title="Hãy cho biết chỗ ở bạn có những gì?" subtitle="Chọn những tiện ích mà bạn có" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {amenity?.basis[0].amenities.map((item: any, index) => {
                    const Icon = getIcon(item.icon);
                    const isSelected = amenityList.includes(item._id);
                    if (!Icon) return null;
                    return (
                        <div key={index} className="col-span-1">
                            <CategoryInput
                                onClick={() => handleAmenitySelect(item._id)}
                                selected={isSelected}
                                label={item.name}
                                icon={Icon}
                            />
                        </div>
                    );
                })}
            </div>
            <Heading title="Bạn có tiện ích nào nổi bật không?" subtitle="Hãy chọn những tiện ích nổi bật nếu có" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {amenity?.featured[0].amenities.map((item: any, index) => {
                    const Icon = getIcon(item.icon);
                    const isSelected = amenityList.includes(item._id);
                    if (!Icon) return null;
                    return (
                        <div key={index} className="col-span-1">
                            <CategoryInput
                                onClick={() => handleAmenitySelect(item._id)}
                                selected={isSelected}
                                label={item.name}
                                icon={Icon}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderImages = () => {
        const isMinimumMet = imageGroup.length >= 5;

        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <Heading title="Thêm hình ảnh về nơi ở của bạn" subtitle="Hiển thị cho khách những gì họ sẽ thấy" />
                    <div>
                        {imageGroup.length > 0 && (
                            <ImageUpload
                                value={imageGroup[0] || ''}
                                onChange={(newImage) => handleAddImage(newImage)}
                            />
                        )}
                    </div>
                </div>
                {imageGroup.length === 0 && (
                    <ImageUpload value={imageGroup[0] || ''} onChange={(newImage) => handleAddImage(newImage)} />
                )}
                {/* Hiển thị ảnh */}
                <div className="flex flex-col gap-6">
                    {/* Ảnh bìa */}
                    {imageGroup.length > 0 && (
                        <div className="relative">
                            <Image
                                src={imageGroup[0]}
                                alt="Ảnh bìa"
                                width={800}
                                height={400}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded text-sm font-semibold">
                                Ảnh bìa
                            </div>
                            <div className="absolute top-2 right-2">
                                <button
                                    className="bg-black bg-opacity-50 text-white flex w-[23px] justify-center rounded-full relative"
                                    onClick={() => toggleImageMenu(0)}
                                >
                                    ...
                                </button>
                                {isOpen[0] && (
                                    <div className="absolute flex flex-col items-start rounded-xl shadow-md bg-white overflow-hidden top-12 -right-[5px] w-[100px] text-sm z-10 p-1 gap-1">
                                        <button
                                            className="block px-2 py-2 w-full text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => {}}
                                        >
                                            Chỉnh sửa
                                        </button>
                                        <button
                                            className="block px-2 py-2 w-full text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => handleRemoveImage(0)}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Các ảnh còn lại */}
                    {imageGroup.length > 1 && (
                        <div className="grid grid-cols-2 gap-4">
                            {imageGroup.slice(1).map((url, index) => (
                                <div key={index} className="relative border rounded-lg overflow-hidden group">
                                    <Image
                                        src={url}
                                        alt={`Image ${index + 2}`}
                                        width={400}
                                        height={300}
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <button
                                            className="bg-black bg-opacity-50 text-white flex w-[23px] justify-center rounded-full relative"
                                            onClick={() => toggleImageMenu(index + 1)}
                                        >
                                            ...
                                        </button>
                                        {isOpen[index + 1] && (
                                            <div className="absolute flex flex-col items-start rounded-xl shadow-md bg-white overflow-hidden top-12 -right-[5px] w-[100px] text-sm z-10 p-1 gap-1">
                                                <button
                                                    className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    onClick={() => {}}
                                                >
                                                    Chỉnh sửa
                                                </button>
                                                <button
                                                    className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    onClick={() => handleRemoveImage(index + 1)}
                                                >
                                                    Xóa
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Thông báo lỗi nếu không đủ hình ảnh */}
                {!isMinimumMet && <div className="text-red-500 text-sm">Bạn cần tải lên tối thiểu 5 hình ảnh.</div>}
            </div>
        );
    };

    const renderDescription = () => (
        <div className="flex flex-col gap-8">
            <Heading
                title="Hãy để lại mô tả và tiêu đề cho căn hộ của bạn"
                subtitle="Để lại những lời nhắn ngắn gọn mà đầy đủ!"
            />
            <div className="flex flex-col items-center gap-2">
                <Input id="title" label="Title" disabled={isLoading} register={register} errors={errors} required />
                <hr />
                <Input
                    id="description"
                    label="Description"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        </div>
    );

    const renderPrice = () => (
        <>
            <Heading title="Now, set your price" subtitle="How much do you charge pre night?" />
            <div className="flex flex-col gap-8 mt-8 items-center">
                <Input
                    id="pricePerNight"
                    label="Giá"
                    formatPrice
                    type="number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        </>
    );
    const renderDiscount = () => (
        <>
            <Heading
                title="Chọn loại giảm giá cho căn hộ của bạn"
                subtitle="hãy giảm giá 1 cách hợp lý để phù hợp với khách hàng"
            />
            <div className="flex flex-col justify-center mt-8 gap-3">
                <DiscountInput
                    discountPresent={20}
                    title="Khuyến mãi cho nhà/phòng cho thuê mới"
                    subTitle="Giảm giá 20% cho 3 lượt đặt phòng đầu tiên của bạn"
                />
                <DiscountInput
                    discountPresent={20}
                    title="Giảm giá theo tuần"
                    subTitle="Dành cho thời gian ở từ 7 đêm trở lên"
                    input
                />
                <DiscountInput
                    discountPresent={15}
                    title="Giảm giá theo tháng"
                    subTitle="Dành cho thời gian ở từ 28 đêm trở lên"
                    input
                />
            </div>
        </>
    );

    const renderReceipt = () => (
        <>
            <Heading
                title="Hãy nhìn lại mục cho thuê của bạn"
                subtitle="Dưới đây là những thông tin mà chúng tôi sẽ hiển thị cho khách. Hãy đảm bảo mọi thứ đều ổn thỏa."
            />
            <div className="flex flex-col justify-center md:flex-row mt-3">
                <div className="mb-8 md:mb-0">
                    <PropertyCardPreview
                        title={title}
                        pricePerNight={pricePerNight}
                        image={imageGroup[0]}
                        onClick={previewModal.onOpen}
                    />
                </div>
                <div className="lg:ml-[78px] md:ml-[48px] md:mb-0 md:max-w-[400px] mb-8 ">
                    <div>
                        <h2 className="md:text-2xl font-bold text-lg">Tiếp theo là gì?</h2>
                        <div className="flex flex-row mb-6 md:mb-8 mt-4">
                            <div className="mr-4">
                                <ListDoneIcon />
                            </div>
                            <Heading
                                title="Xác nhận một vài thông tin rồi đăng cho thuê"
                                subtitle="Chúng tôi sẽ báo cho bạn biết nếu bạn cần xác minh danh tính hoặc đăng ký với chính quyền địa phương."
                                fontSize="text-lg "
                                fontSizeSubTitle="text-sm"
                            />
                        </div>
                        <div className="flex flex-row mb-6 md:mb-8 mt-4">
                            <div className="mr-4">
                                <ListDoneIcon />
                            </div>
                            <Heading
                                title="Điều chỉnh cài đặt của bạn"
                                subtitle="Đặt ra nội quy nhà, chọn chính sách hủy, chọn cách thức đặt phòng của khách, v.v."
                                fontSize="text-lg "
                                fontSizeSubTitle="text-sm"
                            />
                        </div>
                        <div className="flex flex-row mb-6 md:mb-8 mt-4">
                            <div className="mr-4">
                                <SetUpSystemIcon />
                            </div>
                            <Heading
                                title="Thiết lập lịch"
                                subtitle="Chọn ngày mục cho thuê có thể đón khách. Mục cho thuê sẽ hiển thị sau 24 giờ kể từ khi bạn đăng."
                                fontSize="text-lg "
                                fontSizeSubTitle="text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const getStepContent = () => {
        switch (step) {
            case STEPS.CATEGORY:
                return renderCategoryStep();
            case STEPS.LOCATION:
                return renderLocationStep();
            case STEPS.INFO:
                return renderInfoStep();
            case STEPS.AMENITY:
                return renderAmenityStep();
            case STEPS.IMAGES:
                return renderImages();
            case STEPS.DESCRIPTION:
                return renderDescription();
            case STEPS.PRICE:
                return renderPrice();
            case STEPS.DISCOUNT:
                return renderDiscount();
            case STEPS.RECEIPT:
                return renderReceipt();
            default:
                return undefined;
        }
    };

    let bodyContent = getStepContent();

    return (
        <>
            <Modal
                isOpen={rentModal.isOpen}
                title="Airbnb your home"
                onClose={rentModal.onClose}
                onSubmit={handleSubmit(onSubmit)}
                actionLabel={actionLabel}
                secondaryActionLabel={secondaryActionLabel}
                secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
                body={bodyContent}
                rent
            />
            <PreviewModal
                image={imageGroup[0]}
                title={title}
                userName={currentUser?.name}
                maxGuests={guestCount}
                numBedrooms={numBedrooms}
                numBathrooms={numBathrooms}
                imageUser={currentUser?.image}
                address={address}
                city={city}
                country={country}
            />
        </>
    );
};
export default RentModal;
