import * as React from "react";
import { Layout } from "../components/Layout";
import { Seo } from "../components/Seo";
import { Hero } from "../components/Hero";
import { EmailCapture } from "../components/EmailCapture";
import { Philosophy } from "../components/Philosophy";
import { ValueHighlights } from "../components/ValueHighlights";
import { Footer } from "../components/Footer";
import { JsonLd } from "../components/JsonLd";

export function Head() {
  return <JsonLd pathname="/" />;
}

export default function IndexPage() {
  const scrollToList = React.useCallback(() => {
    document.getElementById("private-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <Seo
        description="Luxury piercing jewellery India: hypoallergenic titanium and surgical stainless steel body jewellery by Ira Luxe. Join the private list for early access."
      />
      <main id="main">
        <Hero onJoinList={scrollToList} />
        <EmailCapture />
        <Philosophy />
        <ValueHighlights />
      </main>
      <Footer />
    </Layout>
  );
}
