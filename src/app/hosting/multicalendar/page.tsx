import ClientOnly from '@/components/ClientOnly';
import MultiCalenderClient from './MultiCalenderClient';

export default function MultiCalenderPage() {
    return (
        <ClientOnly>
            <MultiCalenderClient />
        </ClientOnly>
    );
}
