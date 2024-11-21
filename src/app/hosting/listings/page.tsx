import ClientOnly from '@/components/ClientOnly';
import ListingsClient from './ListingsClient';
export default function ListingsPage() {
    return (
        <ClientOnly>
            <ListingsClient />
        </ClientOnly>
    );
}
