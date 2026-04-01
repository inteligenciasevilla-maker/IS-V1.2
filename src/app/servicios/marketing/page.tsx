"use client";

import React from "react";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { COPY } from "@/constants/copy";
import { Megaphone } from "lucide-react";

export default function MarketingPage() {
  const service = COPY.services.items.find((s) => s.id === "marketing")!;
  return (
    <ServiceLayout 
      id={service.id}
      title={service.title}
      description={service.description}
      icon={Megaphone}
      outcomes={service.outcomes}
    />
  );
}
