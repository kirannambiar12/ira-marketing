import "./src/styles/global.css";

const publicApiKey =
  process.env.GATSBY_KLAVIYO_PUBLIC_API_KEY ?? process.env.GATSBY_KLAVIYO_COMPANY_ID ?? "";

export const onClientEntry = () => {
  if (!publicApiKey || typeof document === "undefined") return;
  const attr = `data-klaviyo-company="${publicApiKey}"`;
  if (document.querySelector(`script[${attr}]`)) return;
  const s = document.createElement("script");
  s.async = true;
  s.type = "text/javascript";
  s.src = `https://static.klaviyo.com/onsite/js/${encodeURIComponent(publicApiKey)}/klaviyo.js`;
  s.setAttribute("data-klaviyo-company", publicApiKey);
  document.head.appendChild(s);
};
