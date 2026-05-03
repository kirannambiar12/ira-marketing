import * as React from "react";
import { BrandLogo } from "./BrandLogo";
import { subscribeEmailToKlaviyoList } from "../lib/klaviyo";

type EmailCaptureProps = {
  id?: string;
};

export function EmailCapture({ id = "private-list" }: EmailCaptureProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = React.useState<string | null>(null);

  const publicApiKey =
    process.env.GATSBY_KLAVIYO_PUBLIC_API_KEY ?? process.env.GATSBY_KLAVIYO_COMPANY_ID ?? "";
  const listId = process.env.GATSBY_KLAVIYO_LIST_ID ?? "";
  const klaviyoConfigured = Boolean(publicApiKey && listId);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);

    if (!klaviyoConfigured) {
      setStatus("error");
      setMessage(
        "Sign-up is not configured yet. Please email care@iraluxe.in or try again later.",
      );
      return;
    }

    try {
      const result = await subscribeEmailToKlaviyoList(email.trim(), publicApiKey, listId);
      if (result.ok) {
        setStatus("success");
        setEmail("");
        setMessage("You are on the private list. We will write when the first drop opens.");
        return;
      }
      setStatus("error");
      setMessage(
        result.detail ??
        "Something went wrong. Please try again or email care@iraluxe.in",
      );
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email care@iraluxe.in");
    }
  }

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative overflow-hidden border-b border-ink/10 bg-ink-soft text-ivory"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink opacity-95"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 top-0 h-full w-1/2 bg-gradient-to-l from-gold/10 via-transparent to-transparent blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-content px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-12">
            <BrandLogo variant="inline" className="mb-10 sm:mb-12" />
            <p className="label-caps text-gold/80">Private access</p>
            <h2
              id={`${id}-heading`}
              className="mt-5 font-serif text-4xl font-normal tracking-tight text-balance sm:text-5xl lg:text-[3.15rem]"
            >
              Join the Private List
            </h2>
            <p className="mt-5 font-sans text-sm font-medium uppercase tracking-[0.3em] text-ivory/55">
              Exclusive early access. Limited invites only.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-stretch"
              noValidate
            >
              <label className="sr-only" htmlFor={`${id}-email`}>
                Email address
              </label>
              <input
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="min-h-[54px] flex-1 border border-ivory/20 bg-ink/40 px-5 font-sans text-sm text-ivory shadow-inset backdrop-blur-sm placeholder:text-ivory/30 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="min-h-[54px] border border-gold-bright/90 bg-gradient-to-b from-gold-bright to-gold px-10 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-ink shadow-lux-soft transition-all duration-300 hover:brightness-105 disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Request access"}
              </button>
            </form>
            <p className="mt-5 font-sans text-xs leading-relaxed text-ivory/48">
              Implant-grade titanium · Surgical stainless steel · Premium craftsmanship · Limited releases
            </p>
            {message ? (
              <p className="mt-5 font-sans text-sm text-gold-bright" role="status" aria-live="polite">
                {message}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
