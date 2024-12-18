'use client';
import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
    GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCage,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiWindmill,
    GiCook,
    GiCookingPot,
    GiHotSurface,
    GiWashingMachine,
    GiChessRook,
    GiBarbecue,
    GiTable,
    GiFireplace,
    GiPianoKeys,
} from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';
import {
    MdOutlineVilla,
    MdWifi,
    MdTv,
    MdWork,
    MdOutlineDeck,
    MdOutlineFireplace,
    MdOutlineWater,
    MdSportsEsports,
} from 'react-icons/md';
import {
    FaSkiing,
    FaCar,
    FaParking,
    FaSnowflake,
    FaSwimmer,
    FaDumbbell,
    FaUmbrellaBeach,
    FaShower,
    FaTableTennis,
} from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { usePathname, useSearchParams } from 'next/navigation';

import CategoryBox from '../CategoryBox';

import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../CustomArrow';
import { useState } from 'react';
import { AlterIcon } from '../Icon';
import { IconType } from 'react-icons';

// export const categories = [
//     {
//         label: 'Beach',
//         icon: TbBeach,
//         description: 'This property is close to the beach!',
//     },
//     {
//         label: 'Windmills',
//         icon: GiWindmill,
//         description: 'This property has windmills!',
//     },
//     {
//         label: 'Modern',
//         icon: MdOutlineVilla,
//         description: 'This property is close modern!',
//     },
//     {
//         label: 'Countryside',
//         icon: TbMountain,
//         description: 'This property is in countryside !',
//     },
//     {
//         label: 'Pools',
//         icon: TbPool,
//         description: 'This property has a pool!',
//     },
//     {
//         label: 'Islands',
//         icon: GiIsland,
//         description: 'This property is on a Island!',
//     },
//     {
//         label: 'Lake',
//         icon: GiBoatFishing,
//         description: 'This property is close to lake!',
//     },
//     {
//         label: 'Skiing',
//         icon: FaSkiing,
//         description: 'This property has skiing activities!',
//     },
//     {
//         label: 'Castles',
//         icon: GiCastle,
//         description: 'This property is in castle!',
//     },
//     {
//         label: 'Camping',
//         icon: GiForestCamp,
//         description: 'This property has camping activities!',
//     },
//     {
//         label: 'Arctic',
//         icon: BsSnow,
//         description: 'This property is in a Arctic!',
//     },
//     {
//         label: 'Cave',
//         icon: GiCaveEntrance,
//         description: 'This property is a Cave!',
//     },
//     {
//         label: 'Desert',
//         icon: GiCactus,
//         description: 'This property is in theDesert!',
//     },
//     {
//         label: 'Barns',
//         icon: GiBarn,
//         description: 'This property is in a Barn!',
//     },
//     {
//         label: 'Lux',
//         icon: IoDiamond,
//         description: 'This property is luxurious!',
//     },
// ];

export const getIcon = (iconName: string): IconType | null => {
    const IconMap: Record<string, IconType> = {
        TbBeach,
        GiWindmill,
        MdOutlineVilla,
        TbMountain,
        FaTableTennis,
        GiHotSurface,
        TbPool,
        GiIsland,
        GiBoatFishing,
        FaSkiing,
        GiCastle,
        GiForestCamp,
        BsSnow,
        GiCookingPot,
        GiCaveEntrance,
        GiCactus,
        GiBarn,
        IoDiamond,
        GiCook,
        GiWashingMachine,
        GiChessRook,
        GiBarbecue,
        GiTable,
        GiFireplace,
        GiPianoKeys,
        MdWifi,
        MdTv,
        MdWork,
        MdOutlineDeck,
        MdOutlineFireplace,
        MdOutlineWater,
        MdSportsEsports,
        FaCar,
        FaParking,
        FaSnowflake,
        FaSwimmer,
        FaDumbbell,
        FaUmbrellaBeach,
        FaShower,
    };

    return IconMap[iconName] || null;
};
interface CategoriesProps {
    categories?: SafeCategory[] | null;
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const [currentCategory, setCurrentCategory] = useState(0);

    const totalCategory = categories ? categories.length : 0;

    const isMainPage = pathname === '/home';

    if (!categories || categories.length === 0) {
        return null;
    }

    if (!isMainPage) {
        return null;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 3,
        initialSlide: 0,
        swipeToSlide: true,
        variableWidth: true,
        afterChange: (current: number) => setCurrentCategory(current),
        nextArrow: currentCategory < totalCategory - 8 ? <NextArrow /> : undefined,
        prevArrow: currentCategory > 0 ? <PrevArrow /> : undefined,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6, // Khi màn hình nhỏ hơn 1024px hiển thị 6 phần tử
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Container>
            <div className="flex items-center justify-between space-x-4">
                <div className="max-w-[90%] pt-2">
                    <Slider {...settings}>
                        {categories.map((item, index) => {
                            const Icon = getIcon(item.icon);
                            if (!Icon) return null;
                            return (
                                <div key={index} style={{ width: 100 }} className="overflow-hidden">
                                    <CategoryBox
                                        key={index}
                                        label={item.name}
                                        description=""
                                        icon={Icon}
                                        selected={category === item.name}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>

                <div className="flex items-center gap-2 p-2 h-12 rounded-lg border border-[#ddd] bg-white cursor-pointer">
                    <AlterIcon />
                    <div className="font-sans text-[#222] font-messina text-xs leading-normal">Filters</div>
                </div>
            </div>
        </Container>
    );
};

export default Categories;
