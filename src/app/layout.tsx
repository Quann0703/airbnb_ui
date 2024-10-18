import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';

import '@/app/globals.css';
import ClientOnly from '@/components/ClientOnly';
import ToasterProvider from '@/providers/ToasterProvider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NextAuthWrapper from '@/library/next.auth.wrapper';
import { getCurrentUser, getSession } from '@/actions/getCurrentUser';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const metadata: Metadata = {
    title: 'Airbnb',
    description: 'Generated by create next app',
};

const font = Nunito({
    subsets: ['latin'],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const currentUser = await getCurrentUser();
    const session = await getSession();

    return (
        <html lang="en">
            <body className={font.className}>
                <ThemeRegistry>
                    <ClientOnly>
                        <ToasterProvider />
                    </ClientOnly>

                    <NextAuthWrapper>{children}</NextAuthWrapper>
                </ThemeRegistry>
            </body>
        </html>
    );
}
