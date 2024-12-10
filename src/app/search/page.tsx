import ClientOnly from '@/components/ClientOnly';
import SearchClient from './SearchClient';

interface SearchParams {}
const SearchPage = ({ params }: { params: SearchParams }) => {
    return (
        <ClientOnly>
            <SearchClient />
        </ClientOnly>
    );
};

export default SearchPage;
