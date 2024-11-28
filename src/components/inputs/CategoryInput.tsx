'use client';

import { IconType } from 'react-icons';

interface CategoryInputProps {
    label: string;
    icon: IconType;
    onClick: (value: string) => void;
    selected?: boolean;
}

const CategoryInput: React.FC<CategoryInputProps> = ({ label, icon: Icon, onClick, selected }) => {
    return (
        <div
            onClick={() => {
                onClick(label);
            }}
            className={`rounded-xl
            border-2
            p-4
            flex
            flex-col
            h-full
            w-full
            gap-3
            md:min-h-[88px]
            hover:border-black
            transition
            cursor-pointer
            ${selected ? 'border-black' : 'border-neutral-200'}`}
        >
            <Icon size={30} />
            <div className="font-semibold">{label}</div>
        </div>
    );
};

export default CategoryInput;