'use client';

import { FC } from 'react';
import Container from '../Container';
import Logo from '../navbar/Logo';

interface NavbarProps {
    currentUser?: SafeUser | null;
}
const HeaderRoot: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <div className=" w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 mb:gap-0">
                        <Logo />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default HeaderRoot;
