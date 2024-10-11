'use client';

import {
    AirIcon,
    BicycleIcon,
    CameraIcon,
    DryerIcon,
    GardenIcon,
    KitchenIcon,
    PetIcon,
    RefrigeratorIcon,
    WasherIcon,
    WifiIcon,
} from '../Icon';
import OfferItem from './OfferItem';

interface ListingOfferProps {}
const ListingOffer: React.FC<ListingOfferProps> = () => {
    return (
        <>
            <div className="w-[670px]  text-black text-2xl font-medium font-['Inter'] leading-loose">
                Nơi này có những gì cho bạn
            </div>
            <div className="h-56 mt-5 justify-start items-start gap-24 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <OfferItem title="Garden view" icon={<GardenIcon className="w-8 h-8 relative" />} />
                    <OfferItem title="Wifi" icon={<WifiIcon className="w-8 h-8 relative" />} />
                    <OfferItem title="Free washer - in building" icon={<WasherIcon className="w-8 h-8 relative" />} />
                    <OfferItem title="Central air conditioning" icon={<AirIcon className="w-8 h-8 relative" />} />
                    <OfferItem title="Refrigerator" icon={<RefrigeratorIcon className="w-8 h-8 relative" />} />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <OfferItem title="Kitchen" icon={<KitchenIcon className="w-8 h-8 relative" />} />
                    <OfferItem title="Pets allowed" icon={<PetIcon className="w-8 h-8 relative" />} />
                    <OfferItem title="Dryer" icon={<DryerIcon className="w-8 h-8 relative" />} />
                    <OfferItem
                        title="Security cameras on property"
                        icon={<CameraIcon className="w-8 h-8 relative" />}
                    />
                    <OfferItem title="Bicycles" icon={<BicycleIcon className="w-8 h-8 relative" />} />
                </div>
            </div>
            <div className="h-9 px-4 py-2 mt-4 bg-white rounded-lg shadow border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-sm font-medium font-inter leading-tight">Show all 37 amenities</div>
            </div>
        </>
    );
};

export default ListingOffer;
