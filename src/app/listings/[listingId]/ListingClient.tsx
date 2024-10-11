'use client';
import { useEffect, useMemo, useState } from 'react';
import { Range } from 'react-date-range';
import { differenceInCalendarDays, eachDayOfInterval } from 'date-fns';

import Container from '@/components/Container';
import ListingHead from '@/components/listings/ListingHead';
import ListingImage from '@/components/listings/ListingImage';
import ListingInfo from '@/components/listings/ListingInfo';
import ListingReservation from '@/components/listings/ListingReservation';
import ListingReview from '@/components/listings/ListingReview';
import geocodeCity from '@/actions/getLoactionCity';
import Map from '@/components/Map';

import { NextArrowIcon } from '@/components/Icon';
import ListingInfoHost from '@/components/listings/ListingInfoHost';

interface ListingClientProps {
    reservations?: SafeReservation[];
    currentUser?: SafeUser | null;
    property?: SafeProperty & {
        host: SafeUser;
    };
}
interface LocationData {
    value: string;
    label: string;
    flag: string;
    latlng: [number, number]; // [latitude, longitude]
    region: string;
}

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
};

export interface Guest {
    adults: number;
    children: number;
    infants: number;
    pets: number;
}

const initialGuests = {
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
};

const ListingClient: React.FC<ListingClientProps> = ({ currentUser, reservations, property }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [locationData, setLocationData] = useState<LocationData | null>(null);
    const [totalPrice, setTotalPrice] = useState(property?.pricePerNight);
    const [guests, setGuests] = useState<Guest>(initialGuests);

    const handleGuestsChange = (adults: number, children: number, infants: number) => {
        setGuests({ ...guests, adults, children, infants });
    };

    const disableDates = useMemo(() => {
        let dates: Date[] = [];
        reservations?.forEach((reservation) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate),
            });
            dates = [...dates, ...range];
        });
        return dates;
    }, [reservations]);

    const dayCount = useMemo(() => {
        let dayCount = 0;
        if (dateRange.startDate && dateRange.endDate) {
            dayCount = differenceInCalendarDays(dateRange.endDate, dateRange.startDate) + 1;
        }
        return dayCount;
    }, [dateRange.endDate, dateRange.startDate]);

    useEffect(() => {
        const fetchLocationDataByCity = async (cityName: string) => {
            try {
                const data = await geocodeCity(cityName);
                setLocationData(data);
            } catch (error) {
                console.error('Lỗi:', error);
            }
        };
        fetchLocationDataByCity(`${property?.address} ${property?.city}`);
    }, []);

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(dateRange.endDate, dateRange.startDate);
            if (dayCount && property?.pricePerNight) {
                setTotalPrice(dayCount * property?.pricePerNight);
            } else {
                setTotalPrice(property?.pricePerNight);
            }
        }
    }, [dateRange, property?.pricePerNight]);
    return (
        <Container>
            <div className="w-full mx-auto pt-40">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={property?.title}
                        id={property?._id}
                        currentUser={currentUser}
                        address={property?.address}
                    />
                    <ListingImage propertyImage={property?.images} />
                    <div className="grid grid-1 md:grid-cols-7 md:gap-28 mt-6">
                        <ListingInfo
                            dateRange={dateRange}
                            guests={property?.maxGuests}
                            bathroom={property?.numBathrooms}
                            bedroom={property?.numBedrooms}
                            description={property?.description}
                            category={property?.category}
                            address={property?.address}
                            disabledDates={disableDates}
                            onChangeDate={(value) => setDateRange(value)}
                            dayCount={dayCount}
                        />
                        <div className="order-first mb-10 md:order-last md:col-span-3">
                            <ListingReservation
                                price={property?.pricePerNight}
                                totalPrice={totalPrice}
                                dateRange={dateRange}
                                disabled={isLoading}
                                disabledDates={disableDates}
                                guests={guests}
                                onGuestsChange={handleGuestsChange}
                                onChangeDate={(value) => setDateRange(value)}
                                dayCount={dayCount}
                            />
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-200 my-7"></div>
                    <ListingReview />
                    <div className="w-full border-t border-gray-200 my-7"></div>
                    <div className="h-[688px] flex-col justify-start items-start gap-6 inline-flex">
                        <div className="self-stretch text-black text-2xl  font-semibold leading-loose">
                            Where you’ll be
                        </div>
                        <Map locationData={locationData} />
                        <div className="h-32 flex-col justify-start items-start gap-4 inline-flex   rounded-lg ">
                            <div className="self-stretch text-black text-lg font-bold  leading-7">
                                {property?.address}, {property?.city}, {property?.country}
                            </div>
                            {/* <div className="self-stretch text-black text-base font-normal  leading-normal">
                                Very dynamic and appreciated district by the people of Bordeaux thanks to rue St James
                                and place Fernand Lafargue. Home to many historical monuments such as the Grosse Cloche,
                                the Porte de Bourgogne and the Porte Cailhau, and cultural sites such as the Aquitaine
                                Museum.
                            </div> */}
                            <div className="flex items-center gap-1 cursor-pointer">
                                <span className="text-black text-base font-medium underline">Show more</span>
                                <NextArrowIcon className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-200 my-7"></div>
                    <ListingInfoHost host={property?.host} />
                </div>
            </div>
        </Container>
    );
};

export default ListingClient;
