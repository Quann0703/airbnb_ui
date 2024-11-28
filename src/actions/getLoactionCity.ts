'use server';

import { sendRequest } from '@/utils/api';

interface LocationData {
    value: string;
    label: string;
    flag: string;
    latlng: [number, number];
    region: string;
}
const geocodeCity = async (cityName: string): Promise<LocationData> => {
    try {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(cityName)}.json`;

        const data = await sendRequest<{ features: Array<any> }>({
            url,
            method: 'GET',
            queryParams: {
                access_token: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
            },
        });

        const feature = data.features[0];
        const [longitude, latitude] = feature.geometry.coordinates;

        return {
            value: cityName.toLowerCase().replace(/\s+/g, '-'),
            label: feature.place_name,
            flag: `https://flagcdn.com/w320/vn.png`,
            latlng: [latitude, longitude],
            region: feature.context.find((ctx: any) => ctx.id.includes('country'))?.text || 'Không rõ',
        };
    } catch (error) {
        console.error('Lỗi khi geocode thành phố:', error);
        throw new Error('Không tìm thấy tọa độ cho thành phố này.');
    }
};

export default geocodeCity;
