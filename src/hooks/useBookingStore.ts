'use client';
import { create } from 'zustand';
import { differenceInDays } from 'date-fns';

interface BookingStore {
    startDate: Date | null;
    endDate: Date | null;
    numberOfDays: number;
    totalAmount: number;
    dailyRate: number;
    title: string;
    imageBooking: string;
    bookingView: string;
    rate: number;
    setTitle: (title: string) => void;
    setDates: (startDate: Date, endDate: Date) => void;
    setDailyRate: (rate: number) => void;
    calculateTotal: () => void;
    setNumberGuests: (guest: number) => void;
    setImageBooking: (image: string) => void;
    numberGuests: number;
    setBookView: (view: string) => void;
    setRating: (rate: number) => void;
}

const useBookingStore = create<BookingStore>((set) => ({
    startDate: null,
    endDate: null,
    numberOfDays: 0,
    totalAmount: 0,
    dailyRate: 0,
    imageBooking: '',
    numberGuests: 1,
    title: '',
    bookingView: '',
    rate: 0,
    setDates: (startDate, endDate) =>
        set(() => {
            const numberOfDays = differenceInDays(endDate, startDate) + 1; // Tính số ngày sử dụng date-fns
            return { startDate, endDate, numberOfDays };
        }),

    setDailyRate: (rate) => set({ dailyRate: rate }),
    calculateTotal: () =>
        set((state) => ({
            totalAmount: state.numberOfDays * state.dailyRate,
        })),
    setNumberGuests: (guest) => set({ numberGuests: guest }),
    setTitle: (title) => set({ title: title }),
    setImageBooking: (image) => set({ imageBooking: image }),
    setBookView: (view) => set({ bookingView: view }),
    setRating: (rate) => set({ rate: rate }),
}));

export default useBookingStore;
