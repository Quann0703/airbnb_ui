import { getCurrentUser } from '@/actions/getCurrentUser';
import ClientOnly from '@/components/ClientOnly';
import BookClient from './BookClient';

interface BookPageParams {
    propertyId: string;
}

const BookPage = async ({ params }: { params: BookPageParams }) => {
    const currentUser = await getCurrentUser();
    return (
        <ClientOnly>
            <BookClient currentUser={currentUser} propertyId={params.propertyId} />
        </ClientOnly>
    );
};

export default BookPage;
