import { getCurrentUser } from '@/actions/getCurrentUser';
import { Metadata } from 'next';
import FooterRoot from '@/components/RootLayout/Footer';
import { ModeratorHeader } from '@/components/ModeratorLayout/Header';
import ClientOnly from '@/components/ClientOnly';
import ToasterProvider from '@/providers/ToasterProvider';

export const metadata: Metadata = {
    title: 'Hosting Page',
    description: 'This is the hosting page.',
};

export default async function HostingLayout({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    return (
        <>
            <ClientOnly>
                <ToasterProvider />
            </ClientOnly>
            <ModeratorHeader currentUser={currentUser} />
            {children}
            {/* <FooterRoot /> */}
        </>
    );
}
