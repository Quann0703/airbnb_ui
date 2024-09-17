'use client';
import { create } from 'zustand';

interface ReactiveModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useReactiveModal = create<ReactiveModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useReactiveModal;
