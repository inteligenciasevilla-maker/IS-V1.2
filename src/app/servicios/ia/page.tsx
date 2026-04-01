"use client";

import React from "react";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { COPY } from "@/constants/copy";
import { Cpu } from "lucide-react";

export default function IAPage() {
  const service = COPY.services.items.find((s) => s.id === "ia")!;
  return (
    <ServiceLayout 
      id={service.id}
      title={service.title}
      description={service.description}
      icon={Cpu}
      outcomes={service.outcomes}
    />
  );
}
