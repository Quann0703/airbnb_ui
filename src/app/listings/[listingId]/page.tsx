import { getCurrentUser } from '@/actions/getCurrentUser';
import ClientOnly from '@/components/ClientOnly';
import ListingClient from './ListingClient';
import { getPropertyId } from '@/actions/property/getPropertyId';
import EmptyState from '@/components/EmptyState';
import { getReservation } from '@/actions/reservation/getReservation';

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const currentUser = await getCurrentUser();
    const property = await getPropertyId(params);
    const reservations = await getReservation({ user: currentUser._id, property: params.listingId });
    console.log(reservations);

    if (!property) {
        return (
            <ClientOnly>
                <EmptyState title="No exact matches" subTitle="Try changing or removing some of your filters" />
            </ClientOnly>
        );
    }
    return (
        <ClientOnly>
            <ListingClient property={property} currentUser={currentUser} reservations={reservations} />
        </ClientOnly>
    );
};

export default ListingPage;
