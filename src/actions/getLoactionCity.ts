'use server';

import { sendRequest } from '@/utils/api';

interface LocationData {
    value: string;
    label: string;
    flag: string;
    latlng: [number, number]; // [latitude, longitude]
    region: string;
}
const geocodeCity = async (cityName: string): Promise<LocationData> => {
    try {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(cityName)}.json`;

        // Sử dụng sendRequest để gửi yêu cầu
        const data = await sendRequest<{ features: Array<any> }>({
            url,
            method: 'GET',
            queryParams: {
                access_token: process.env.NEXT_PUBLIC_MAPBOX_API_KEY, // API key của bạn
            },
        });

        const feature = data.features[0]; // Lấy thông tin đầu tiên
        const [longitude, latitude] = feature.geometry.coordinates;

        return {
            value: cityName.toLowerCase().replace(/\s+/g, '-'), // Dùng tên thành phố làm value
            label: feature.place_name,
            flag: `https://flagcdn.com/w320/vn.png`, // Cờ của Việt Nam (có thể tùy chỉnh)
            latlng: [latitude, longitude], // [latitude, longitude]
            region: feature.context.find((ctx: any) => ctx.id.includes('country'))?.text || 'Không rõ', // Tìm quốc gia
        };
    } catch (error) {
        console.error('Lỗi khi geocode thành phố:', error);
        throw new Error('Không tìm thấy tọa độ cho thành phố này.');
    }
};

export default geocodeCity;
