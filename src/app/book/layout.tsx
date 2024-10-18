import { getCurrentUser } from '@/actions/getCurrentUser';
import { Metadata } from 'next';
import HeaderRoot from '@/components/RootLayout/Header';
import FooterRoot from '@/components/RootLayout/Footer';

export const metadata: Metadata = {
    title: 'Book Page',
    description: 'This is the book page.',
};

export default async function BookLayout({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();

    return (
        <>
            <HeaderRoot currentUser={currentUser} />
            {children}
            <FooterRoot />
        </>
    );
}
