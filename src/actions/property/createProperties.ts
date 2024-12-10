'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';
import { createPropertyImage } from './createPropertyImage';
import { createImage } from './createImage';
import { createPropertyAmenity } from './createPropertyAmenity';
import { updateProperty } from './updateProperty';

export async function createProperty(data: any, currentUser: SafeUser) {
    // Kiểm tra session
    const session = await getSession();
    if (!session || !session.user?.access_token) {
        throw new Error('Không tìm thấy thông tin phiên người dùng');
    }

    // Kiểm tra URL backend
    if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
        throw new Error('URL backend không được cấu hình');
    }

    // Giải nén dữ liệu từ `data`
    const {
        address,
        category,
        city,
        country,
        description,
        maxGuests,
        numBathrooms,
        numBedrooms,
        pricePerNight,
        title,
        amenityList,
        images,
    } = data;

    const body = {
        address,
        category,
        city,
        country,
        description,
        maxGuests,
        numBathrooms,
        numBedrooms,
        pricePerNight,
        title,
        host: currentUser._id,
    };

    try {
        const res = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            body: { ...body },
        });

        if (res.statusCode !== 201) {
            console.error('Không tạo được căn hộ:', res);
            throw new Error(res.message || 'Không tạo được căn hộ');
        }

        const propertyImageId = await createPropertyImage(res.data._id);
        const propertyAmenity = await createPropertyAmenity(res.data._id, amenityList);
        const imageGroupId = await createImage(images, propertyImageId);
        const updateDataProperty = {
            propertyId: res.data._id,
            propertyAmenity,
            propertyImageId,
        };
        const update = await updateProperty(updateDataProperty);
        return {
            update,
            imageGroupId,
        };
    } catch (error) {
        console.error('Lỗi khi gửi request:', error);
        throw error;
    }
}
