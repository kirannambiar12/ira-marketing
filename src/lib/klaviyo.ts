const KLAVIYO_SUBSCRIPTIONS_URL = "https://a.klaviyo.com/client/subscriptions";
/** API revision for client subscriptions; see https://developers.klaviyo.com/en/reference/create_client_subscription */
const KLAVIYO_REVISION = "2026-04-15";

export type KlaviyoSubscribeResult =
  | { ok: true; status: number }
  | { ok: false; status: number; detail?: string };

export async function subscribeEmailToKlaviyoList(
  email: string,
  companyId: string,
  listId: string,
): Promise<KlaviyoSubscribeResult> {
  const url = `${KLAVIYO_SUBSCRIPTIONS_URL}?company_id=${encodeURIComponent(companyId)}`;

  const body = {
    data: {
      type: "subscription" as const,
      attributes: {
        custom_source: "iraluxe.in — private list",
        profile: {
          data: {
            type: "profile" as const,
            attributes: {
              email,
              subscriptions: {
                email: {
                  marketing: { consent: "SUBSCRIBED" as const },
                },
              },
            },
          },
        },
      },
      relationships: {
        list: {
          data: {
            type: "list" as const,
            id: listId,
          },
        },
      },
    },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/vnd.api+json",
      revision: KLAVIYO_REVISION,
    },
    body: JSON.stringify(body),
  });

  if (res.status === 202) {
    return { ok: true, status: res.status };
  }

  let detail: string | undefined;
  try {
    const text = await res.text();
    if (text) {
      const parsed = JSON.parse(text) as { errors?: Array<{ detail?: string }> };
      detail = parsed.errors?.[0]?.detail;
    }
  } catch {
    /* ignore */
  }

  return { ok: false, status: res.status, detail };
}
