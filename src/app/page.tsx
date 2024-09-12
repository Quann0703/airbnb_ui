import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import PropertyCard from "@/components/properties/PropertyCard";
import { Button } from "antd";

export default function Home() {
  return (
    <ClientOnly>
      <Container>
        <div
          className="
      pt-48
      grid
      grid-cols-1
      sm:grid-cols-2
      mm:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8
      "
        >
          <PropertyCard />
        </div>
      </Container>
    </ClientOnly>
  );
}
