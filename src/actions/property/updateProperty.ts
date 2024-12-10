'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export async function updateProperty(updatePropertyData: any) {
    const { propertyAmenity, propertyImageId, propertyId } = updatePropertyData;
    const session = await getSession();
    if (!session || !session.user?.access_token) {
        throw new Error('Không tìm thấy thông tin phiên người dùng');
    }

    if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
        throw new Error('URL backend không được cấu hình');
    }

    try {
        const res = await sendRequest<IBackendRes<any>>({
            method: 'PATCH',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            body: { _id: propertyId, images: propertyImageId, propertyAmenity: propertyAmenity },
        });

        if (res.statusCode !== 200) {
            console.error('Không cập nhật được property:', res);
            throw new Error(res.message || 'Không cập nhật được property');
        }

        console.log('Property đã được cập nhật:', res);
        return res.data;
    } catch (error) {
        console.error('Lỗi khi gửi request:', error);
        throw error;
    }
}
