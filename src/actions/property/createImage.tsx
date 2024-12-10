'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export async function createImage(imageGroup: any, propertyImageId: string) {
    const session = await getSession();
    if (!session || !session.user?.access_token) {
        throw new Error('Không tìm thấy thông tin phiên người dùng');
    }

    if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
        throw new Error('URL backend không được cấu hình');
    }
    if (!validateImageGroup(imageGroup)) {
        throw new Error('Các URL trong imageGroup không hợp lệ');
    }
    try {
        const res = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/image-groups`,
            headers: {
                Authorization: `Bearer ${session.user.access_token}`,
            },
            body: {
                imageSrc: imageGroup,
                propertyImageId,
            },
        });

        if (res.statusCode !== 201) {
            console.error('Không tạo được image group:', res);
            throw new Error(res.message || 'Không tạo được image group');
        }

        console.log('Image group đã được tạo:', res);
        return res.data._id;
    } catch (error) {
        console.error('Lỗi khi gửi request:', error);
        throw error;
    }
}
function isValidUrl(url: string): boolean {
    const pattern = /^(https?:\/\/)?([a-z0-9]+([-.]|)[a-z0-9]+)*(\.[a-z]{2,})+([/?].*)?$/;
    return pattern.test(url);
}

function validateImageGroup(imageGroup: any): boolean {
    if (!Array.isArray(imageGroup)) {
        console.error('imageGroup phải là mảng');
        return false;
    }
    return imageGroup.every(isValidUrl);
}
