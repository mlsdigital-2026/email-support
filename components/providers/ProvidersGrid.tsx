import { providers } from "@/data/providers";
import ProviderCard from "./ProviderCard";

export default function ProvidersGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider) => (
        <ProviderCard
          key={provider.id}
          provider={provider}
        />
      ))}
    </div>
  );
}