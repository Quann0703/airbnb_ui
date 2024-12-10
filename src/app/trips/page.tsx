import ClientOnly from '@/components/ClientOnly';
import TripsClient from './TripsClient';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { getReservationByUser } from '@/actions/reservation/getReservationByUser';

async function TripsPage() {
    const currentUser = await getCurrentUser();
    const reservation = await getReservationByUser(currentUser);
    return (
        <ClientOnly>
            <TripsClient reservations={reservation} />
        </ClientOnly>
    );
}

export default TripsPage;
