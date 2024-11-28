'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
    label?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
    rounded?: boolean;
    base?: boolean;
    text?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
    rounded,
    base,
    text,
    className,
}) => {
    let size = rounded ? 20 : 24;

    return (
        <button
            className={`
                relative 
                disabled:opacity-70 
                disabled:cursor-not-allowed 
                hover:opacity-80 
                transition 
                w-full 
                ${outline ? 'bg-white border-black !text-black' : ''}
                ${small ? 'py-1 text-sm font-light border-[1px]' : 'py-3 text-md font-semibold border-2'}
                ${rounded ? 'rounded-full !p-[10px]' : 'rounded-lg'}
                ${
                    base
                        ? 'bg-gray-100 text-black border-gray-100 hover:bg-gray-300'
                        : 'bg-rose-500 border-rose-500 text-white'
                }
                ${text ? 'bg-transparent !text-black border-opacity-0 hover:bg-gray-100 m-0 !py-2 ' : ''}
                ${className || ''}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && (
                <Icon
                    size={size}
                    className={`
                        ${rounded ? 'top-0 left-[2px]' : 'absolute left-3 top-3'} 
                        ${base ? 'text-black' : ''}
                    `}
                />
            )}
            {label}
        </button>
    );
};

export default Button;
