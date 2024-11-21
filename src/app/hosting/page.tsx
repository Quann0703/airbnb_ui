import { getCurrentUser } from '@/actions/getCurrentUser';
import ClientOnly from '@/components/ClientOnly';
import React from 'react';
import { HostingClient } from './HostingClient';

export default async function HostingPage() {
    const currentUser = await getCurrentUser();
    return (
        <ClientOnly>
            <HostingClient currentUser={currentUser} />
        </ClientOnly>
    );
}
