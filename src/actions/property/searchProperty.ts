'use server';

import { sendRequest } from '@/utils/api';
import { getSession } from '../getCurrentUser';

export interface IPropertyParams {
    userId?: string;
    maxGuests?: number;
    numBedrooms?: number;
    numBathrooms?: number;
    startDate?: string;
    endDate?: string;
    city?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
}

export async function searchProperties(params: IPropertyParams) {
    let query: Record<string, any> = {};
    if (params.category) {
        query.category = params.category;
    }
    if (params.maxGuests) {
        query.maxGuests = params.maxGuests;
    }
    if (params.numBathrooms) {
        query.numBathrooms = params.numBathrooms;
    }
    if (params.numBedrooms) {
        query.numBedrooms = params.numBedrooms;
    }
    // if (params.startDate) {
    //     query.startDate = params.startDate;
    // }
    // if (params.endDate) {
    //     query.endDate = params.endDate;
    // }
    if (params.city) {
        const rawCity = decodeURIComponent(params.city);
        const city = getCity(rawCity);
        query.city = city;
    }

    if (params.minPrice) {
        query.minPrice = params.minPrice;
    }

    if (params.maxPrice) {
        query.maxPrice = params.maxPrice;
    }

    const session = await getSession();

    const res = await sendRequest<IBackendRes<any>>({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/properties/search`,
        headers: {
            Authorization: `Bearer ${session?.user?.access_token}`,
        },
        queryParams: query,
    });
    console.log(query);

    console.log(res);

    if (res.statusCode !== 200) {
        console.error('không có căn hộ nào', res);
        return null;
    }
    return res.data.results;
}
const getCity = (rawCity: any) => {
    if (!rawCity) return null;
    const decodedCity = decodeURIComponent(rawCity);
    const parts = decodedCity.split(',');
    return parts[0].replace(/-/g, ' ');
};
