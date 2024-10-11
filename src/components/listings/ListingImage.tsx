'use client';
import { useEffect, useState } from 'react';
import { Box, CardMedia } from '@mui/material';

import ShowMoreBtn from '../ShowMoreBtn';
import ListingImageDefault from './ListingImageDefault';
import { relative } from 'path';

interface ListingImageProps {
    propertyImage?: Images;
}

const ListingImage: React.FC<ListingImageProps> = ({ propertyImage }) => {
    const [bigImage, setBigImage] = useState('');
    const [subImage, setSubImage] = useState<ImageGroup[]>(propertyImage?.imageGroup || []);
    useEffect(() => {
        const featuredImage = propertyImage?.imageGroup?.find((item) => item.isFeatured && item.imageSrc);
        const notFeaturedImages = propertyImage?.imageGroup?.filter((item) => !item.isFeatured && item.imageSrc) || [];

        if (featuredImage) {
            setBigImage(featuredImage.imageSrc);
        } else {
            setBigImage(
                'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNTA4NjAxNDk3NDg1NTQ2MQ%3D%3D/original/b692ae8e-a118-4906-bf40-16855d715c02.jpeg?im_w=720',
            );
        }

        setSubImage(notFeaturedImages);
    }, [propertyImage]);
    console.log(subImage);

    return (
        <Box display="flex" gap={2} px={2} py={2}>
            <Box flex={8} position="relative" sx={{ overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    height="398"
                    image={bigImage}
                    alt="Big image"
                    sx={{
                        borderRadius: 2,
                        width: '100%',
                        transition: 'opacity 0.3s ease-in-out',
                        maxHeight: '500px',
                        '&:hover': {
                            opacity: 0.7,
                        },
                        objectFit: 'contain',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0)', // Lớp phủ ban đầu trong suốt
                        transition: 'background-color 0.3s ease-in-out', // Tạo hiệu ứng mượt khi hover
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Lớp phủ đen khi hover
                        },
                    }}
                />
            </Box>

            {subImage.length > 0 && (
                <Box flex={4} display="flex" flexDirection="column" gap={2}>
                    <Box display="flex" gap={2}>
                        {subImage.slice(0, 2).map((image, index) => (
                            <ListingImageDefault key={index} image={image.imageSrc} />
                        ))}
                    </Box>
                    <Box display="flex" gap={2} position="relative">
                        {subImage.slice(2, 4).map((image, index) => (
                            <ListingImageDefault key={index} image={image.imageSrc} />
                        ))}

                        <ShowMoreBtn
                            className="!absolute !left-[502px] !top-[145px]"
                            frame="https://c.animaapp.com/qVcaJdtn/img/frame-1.svg"
                        />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default ListingImage;
