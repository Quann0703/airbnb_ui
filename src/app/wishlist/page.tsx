import ClientOnly from '@/components/ClientOnly';
import { getCurrentUser } from '@/actions/getCurrentUser';
import WishlistClient from './WishlistClient';
import { getFavoriteUser } from '@/actions/favorite/getFavoriteUser';

async function WishlistPage() {
    const currentUser = await getCurrentUser();
    const favorites = await getFavoriteUser(currentUser._id);
    return (
        <ClientOnly>
            <WishlistClient currentUser={currentUser} favorites={favorites} />
        </ClientOnly>
    );
}

export default WishlistPage;
