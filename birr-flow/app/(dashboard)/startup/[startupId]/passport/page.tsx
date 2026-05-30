import React from "react";
import { StartupPassportClient } from "./passport-client";

export default async function StartupPassportPage({
  params,
}: {
  params: Promise<{ startupId: string }>;
}) {
  const resolvedParams = await params;
  
  return (
    <div className="max-w-4xl mx-auto py-8">
      <StartupPassportClient startupId={resolvedParams.startupId} />
    </div>
  );
}
