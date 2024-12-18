'use client';

import useFavorite from '@/hooks/useFavorite';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
    listing: string;
    currentUser?: SafeUser | null;
}
const HeartButton: React.FC<HeartButtonProps> = ({ listing, currentUser }) => {
    const { hasFavorite, toggleFavorite } = useFavorite({
        listing,
        currentUser,
    });

    return (
        <div className="relative hover:opacity-80 transition cursor-pointer" onClick={toggleFavorite}>
            <AiOutlineHeart size={28} className="fill-white absolute -top-[2px] -right-[2px]" />
            <AiFillHeart size={24} className={`${hasFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'}`} />
        </div>
    );
};

export default HeartButton;
