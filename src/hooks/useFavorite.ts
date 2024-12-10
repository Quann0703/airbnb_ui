'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import useLoginModal from './useLoginModal';
import { getFavoriteUser } from '@/actions/favorite/getFavoriteUser';
import { deleteFavorite } from '@/actions/favorite/deleteFavorite';
import { createFavorite } from '@/actions/favorite/createFavorite';

interface IUseFavorite {
    listing: string;
    currentUser?: SafeUser | null;
}

const useFavorite = ({ listing, currentUser }: IUseFavorite) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const [hasFavorite, setHasFavorite] = useState(false);

    useEffect(() => {
        const fetchFavoriteStatus = async () => {
            if (currentUser) {
                try {
                    const list = await getFavoriteUser(currentUser._id);
                    console.log('Favorite list:', list);
                    setHasFavorite(list.data.some((favorite: SafeFavorite) => favorite.property._id === listing));
                } catch (error) {
                    console.error('Error fetching favorite status:', error);
                }
            } else {
                setHasFavorite(false);
            }
        };

        fetchFavoriteStatus();
    }, [currentUser, listing]);

    const toggleFavorite = useCallback(
        async (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();

            if (!currentUser) {
                return loginModal.onOpen();
            }

            try {
                if (hasFavorite) {
                    await deleteFavorite(currentUser._id, listing);
                    setHasFavorite(false);
                } else {
                    await createFavorite({ property: listing, user: currentUser._id });
                    setHasFavorite(true);
                }

                router.refresh();
                toast.success(hasFavorite ? 'Đã xóa khỏi danh sách yêu thích' : 'Đã thêm vào danh sách yêu thích');
            } catch (error) {
                toast.error('Đã có 1 vài lỗi xảy ra');
                console.error('Error toggling favorite:', error);
            }
        },
        [currentUser, listing, hasFavorite, loginModal, router],
    );

    return {
        hasFavorite,
        toggleFavorite,
    };
};

export default useFavorite;
