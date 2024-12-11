'use client';

import Container from '@/components/Container';
import Heading from '@/components/Heading';
import PropertyCard from '@/components/properties/PropertyCard';

import React from 'react';

interface WishlistProps {
    favorites?: SafeFavorite[];
    currentUser?: SafeUser;
}
const WishlistClient: React.FC<WishlistProps> = ({ favorites, currentUser }) => {
    return (
        <Container>
            <div className="w-full mx-auto pt-32">
                <Heading title="Danh sách yêu thích" fontSize="text-3xl" />

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 mm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-5 ">
                    {favorites?.map((favorite: any) => {
                        return (
                            <PropertyCard key={favorite?._id} property={favorite.property} currentUser={currentUser} />
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default WishlistClient;
