'use client';

import Image from 'next/image';
import { useReducer } from 'react';

interface BigImageProps {
    property1: 'hover' | 'default';
    image: string;
}
function reducer(state: any, action: any) {
    switch (action) {
        case 'mouse_enter':
            return {
                ...state,
                property1: 'hover',
            };

        case 'mouse_leave':
            return {
                ...state,
                property1: 'default',
            };
    }

    return state;
}
const BigImage: React.FC<BigImageProps> = ({
    property1,
    image = 'https://c.animaapp.com/qVcaJdtn/img/image-6.png',
}) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || 'default',
    });
    console.log(image);

    return (
        <div
            className={`w-[775px] h-[460px] overflow-hidden rounded-lg bg-[#c5c2c2] ${
                state.property1 === 'default' ? 'relative' : ''
            }`}
            onMouseEnter={() => {
                dispatch('mouse_enter');
            }}
            onMouseLeave={() => {
                dispatch('mouse_leave');
            }}
        >
            {state.property1 === 'default' && (
                <Image className="absolute w-full h-full top-0 left-0 object-cover" fill alt="Image" src={image} />
            )}

            {state.property1 === 'hover' && (
                <div className="h-[459px]  bg-cover bg-[50%_50%]" style={{ backgroundImage: `url(${image})` }}>
                    <div className="w-full h-full bg-black opacity-10" />
                </div>
            )}
        </div>
    );
};

export default BigImage;
