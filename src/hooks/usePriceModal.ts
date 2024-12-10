'use client';
import { create } from 'zustand';

interface PriceModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePriceModal = create<PriceModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePriceModal;
