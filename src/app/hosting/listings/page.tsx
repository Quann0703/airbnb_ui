import ClientOnly from '@/components/ClientOnly';
import ListingsClient from './ListingsClient';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { getAllHostProperty } from '@/actions/property/getAllHostProperty';
export default async function ListingsPage() {
    const currentUser = await getCurrentUser();
    const hostProperty = await getAllHostProperty(currentUser._id);
    return (
        <ClientOnly>
            <ListingsClient currentUser={currentUser} hostProperty={hostProperty} />
        </ClientOnly>
    );
}
