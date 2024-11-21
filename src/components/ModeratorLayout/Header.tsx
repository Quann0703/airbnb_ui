'use client';
import React from 'react';
import Container from '../Container';

import Logo from '../navbar/Logo';
import { Navigates } from '../navbar/Navigates';
import HostingMenu from '../navbar/HostingMenu';

interface HeaderProps {
    currentUser?: SafeUser | null;
}

export const ModeratorHeader: React.FC<HeaderProps> = ({ currentUser }) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 mb:gap-0">
                        <Logo />
                        <Navigates />
                        <HostingMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
        </div>
    );
};
