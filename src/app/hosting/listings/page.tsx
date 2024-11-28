import ClientOnly from '@/components/ClientOnly';
import ListingsClient from './ListingsClient';
import { getCurrentUser } from '@/actions/getCurrentUser';
export default async function ListingsPage() {
    const currentUser = await getCurrentUser();
    return (
        <ClientOnly>
            <ListingsClient currentUser={currentUser} />
        </ClientOnly>
    );
}
