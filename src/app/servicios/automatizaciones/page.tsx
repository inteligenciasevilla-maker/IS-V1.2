"use client";

import React from "react";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { COPY } from "@/constants/copy";
import { Zap } from "lucide-react";

export default function AutomatizacionesPage() {
  const service = COPY.services.items.find((s) => s.id === "automatizaciones")!;
  return (
    <ServiceLayout 
      id={service.id}
      title={service.title}
      description={service.description}
      icon={Zap}
      outcomes={service.outcomes}
    />
  );
}
