import { getCurrentUser } from '@/actions/getCurrentUser';
import { getProperties, IPropertyPrams } from '@/actions/property/getProperties';
import ClientOnly from '@/components/ClientOnly';
import Container from '@/components/Container';
import PropertyCard from '@/components/properties/PropertyCard';

interface HomeProps {
    searchParams: IPropertyPrams;
}

export default async function Home({ searchParams }: HomeProps) {
    const properties = await getProperties(searchParams);
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <Container>
                <div className="pt-48 grid grid-cols-1 sm:grid-cols-2 mm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-5 ">
                    {properties?.map((property: any) => {
                        return <PropertyCard key={property?._id} property={property} currentUser={currentUser} />;
                    })}
                </div>
            </Container>
        </ClientOnly>
    );
}
