"use client";

import React from "react";
import { ServiceLayout } from "@/components/services/ServiceLayout";
import { COPY } from "@/constants/copy";
import { GraduationCap } from "lucide-react";

export default function FormacionPage() {
  const service = COPY.services.items.find((s) => s.id === "formacion")!;
  return (
    <ServiceLayout 
      id={service.id}
      title={service.title}
      description={service.description}
      icon={GraduationCap}
      outcomes={service.outcomes}
    />
  );
}
