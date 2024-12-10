import HomeLayout from '../home/layout';

export default function TripLayout({ children }: { children: React.ReactNode }) {
    return <HomeLayout>{children}</HomeLayout>;
}
