'use client';
import useSWR from 'swr';
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
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useFavorite = ({ listing, currentUser }: IUseFavorite) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const { data: favoriteList, mutate } = useSWR(
        currentUser ? `http://localhost:8080/api/v1/favorites?user=${currentUser._id}` : null,
        fetcher,
    );

    const hasFavorite = favoriteList?.data?.some((favorite: SafeFavorite) => favorite.property._id === listing);

    const toggleFavorite = useCallback(
        async (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();

            if (!currentUser) {
                return loginModal.onOpen();
            }

            try {
                if (hasFavorite) {
                    await deleteFavorite(currentUser._id, listing);
                } else {
                    await createFavorite({ property: listing, user: currentUser._id });
                }

                await mutate();
                toast.success(hasFavorite ? 'Đã xóa khỏi danh sách yêu thích' : 'Đã thêm vào danh sách yêu thích');
            } catch (error) {
                toast.error('Đã có 1 vài lỗi xảy ra');
                console.error('Error toggling favorite:', error);
            }
        },
        [currentUser, listing, hasFavorite, loginModal, mutate],
    );

    return {
        hasFavorite,
        toggleFavorite,
    };
};

export default useFavorite;
