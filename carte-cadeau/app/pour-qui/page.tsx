"use client";

import { use } from "react";
import { Gift, UserRound } from "lucide-react";
import { OptionCard } from "@/components/ui/option-card";
import { FlowScreen } from "@/components/ui/flow-screen";
import { buildQuery } from "@/lib/flow-params";

type PourQuiPageProps = {
  searchParams: Promise<Record<string, string | undefined>>;
};

// First decision of the purchase flow — everything downstream (which contact
// form shows, whether Destinataire is needed at all) branches on `pour`.
export default function PourQuiPage({ searchParams }: PourQuiPageProps) {
  const carried = use(searchParams);

  return (
    <FlowScreen backHref="/" carried={carried}>
      <h1 className="font-heading text-3xl text-[var(--on-core-brand-color)] sm:text-4xl">
        Pour qui ?
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <OptionCard
          icon={Gift}
          label="Pour offrir"
          href={`/type-cadeau${buildQuery({ ...carried, pour: undefined })}`}
          size="sm"
        />
        <OptionCard
          icon={UserRound}
          label="Pour moi-même"
          href={`/type-cadeau${buildQuery({ ...carried, pour: "moi" })}`}
          size="sm"
        />
      </div>
    </FlowScreen>
  );
}
