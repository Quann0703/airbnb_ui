'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Logo = () => {
    const router = useRouter();
    return (
        <Image
            src="/images/logo.svg"
            alt="logo"
            className="hidden md:block cursor-pointer "
            height="100"
            width="100"
            onClick={() => router.push('/home')}
        />
    );
};
export default Logo;
