import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="py-20">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </div>

    </section>
  );
}