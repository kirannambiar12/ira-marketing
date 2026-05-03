import * as React from "react";

const LOGO_BLACK = "/black-png.png";
const LOGO_WHITE = "/white-png.png";

type BrandLogoProps = {
  /** `hero` / `onLight`: black mark. `footer` / `inline`: white mark on dark. */
  variant: "hero" | "onLight" | "footer" | "inline";
  className?: string;
};

export function BrandLogo({ variant, className = "" }: BrandLogoProps) {
  const alt = "Ira Luxe — luxury piercing jewellery";
  const shell = `flex w-full justify-center ${className}`.trim();

  if (variant === "hero") {
    return (
      <div className={shell}>
        <img
          src={LOGO_BLACK}
          alt={alt}
          width={480}
          height={160}
          className="h-20 w-auto sm:h-28 md:h-32 lg:h-40 xl:h-[11rem]"
          decoding="async"
          fetchPriority="high"
        />
      </div>
    );
  }

  if (variant === "onLight") {
    return (
      <div className={shell}>
        <img
          src={LOGO_BLACK}
          alt={alt}
          width={400}
          height={135}
          className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 xl:h-32"
          decoding="async"
          loading="lazy"
        />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={shell}>
        <img
          src={LOGO_WHITE}
          alt={alt}
          width={440}
          height={150}
          className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={shell}>
      <img
        src={LOGO_WHITE}
        alt={alt}
        width={520}
        height={180}
        className="h-24 w-auto sm:h-32 md:h-36 lg:h-44 xl:h-[12rem]"
        decoding="async"
      />
    </div>
  );
}
