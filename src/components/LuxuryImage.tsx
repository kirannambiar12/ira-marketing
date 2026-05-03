import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

type LuxuryImageProps = {
  variant: "hero" | "signup";
  className?: string;
};

export function LuxuryImage({ variant, className = "" }: LuxuryImageProps) {
  const frame = `lux-frame overflow-hidden ${className}`.trim();

  if (variant === "hero") {
    return (
      <div className={`${frame} motion-safe:opacity-0 motion-safe:animate-image-reveal motion-reduce:opacity-100`}>
        <StaticImage
          src="../images/hero-pearls.jpg"
          alt="Editorial still life of refined pearl and metal jewellery on silk"
          width={640}
          height={800}
          placeholder="blurred"
          formats={["auto", "webp"]}
          quality={88}
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`${frame} aspect-[4/5] w-full max-w-sm`}>
      <StaticImage
        src="../images/detail-metal.jpg"
        alt="Sculptural metal detail"
        width={480}
        height={600}
        placeholder="blurred"
        formats={["auto", "webp"]}
        quality={85}
        className="block h-full w-full"
        imgClassName="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
