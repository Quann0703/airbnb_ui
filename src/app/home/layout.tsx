import { getCurrentUser } from '@/actions/getCurrentUser';
import { Metadata } from 'next';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientOnly from '@/components/ClientOnly';
import ToasterProvider from '@/providers/ToasterProvider';
import RegisterModal from '@/components/modals/RegisterModal';
import LoginModal from '@/components/modals/LoginModal';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { getCategory } from '@/actions/categories/getCategories';
import SearchModal from '@/components/modals/SearchModal';

export const metadata: Metadata = {
    title: 'Book Page',
    description: 'This is the book page.',
};

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    const categories = await getCategory();
    return (
        <>
            <ClientOnly>
                <ToasterProvider />
                <RegisterModal />
                <LoginModal />
                <SearchModal />
                <Navbar currentUser={currentUser} categories={categories} />
            </ClientOnly>
            {children}
            <ClientOnly>
                <Footer />
            </ClientOnly>
        </>
    );
}
