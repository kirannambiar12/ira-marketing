import * as React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <a
        href="#main"
        className="absolute left-[-9999px] top-auto z-[100] overflow-hidden focus:left-4 focus:top-4 focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:font-sans focus:text-xs focus:font-medium focus:uppercase focus:tracking-[0.2em] focus:text-ivory"
      >
        Skip to content
      </a>
      {children}
      <Analytics framework="gatsby" />
      <SpeedInsights framework="gatsby" />
    </div>
  );
}
