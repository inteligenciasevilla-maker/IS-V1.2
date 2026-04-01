"use client";

import React from "react";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { COPY } from "@/constants/copy";
import { Code } from "lucide-react";

export default function DesarrolloPage() {
  const service = COPY.services.items.find((s) => s.id === "desarrollo")!;

  return (
    <ServiceLayout 
      id={service.id}
      title={service.title}
      description={service.description}
      icon={Code}
      outcomes={service.outcomes}
    />
  );
}
