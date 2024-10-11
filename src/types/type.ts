interface SafeUser {
    _id: string;
    name: string;
    email: string;
    image?: string;
    isVerify?: boolean;
    role?: string;
}
interface ImageGroup {
    _id: string;
    imageSrc: string;
    isFeatured?: boolean;
    propertyImageId?: string;
    createdAt: string;
    updatedAt: string;
}

interface Images {
    _id: string;
    property: string;
    imageGroup?: ImageGroup[];
    createdAt: string;
    updatedAt: string;
}

interface SafeProperty {
    _id: string;
    title: string;
    description: string;
    address: string;
    city: string;
    country?: string;
    pricePerNight: number;
    maxGuests: number;
    numBedrooms: number;
    numBathrooms: number;
    host: SafeUser;
    category: SafeCategory;
    amenityList?: string[];
    createdAt?: string;
    updatedAt?: string;
    images?: Images;
    view?: string;
    rating?: number;
}

interface SafeReservation {
    user: SafeUser;
    propertyID: SafeProperty;
    startDate: string;
    endDate: string;
    totalPrice: number;
    status?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface SafeCategory {
    _id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
}
