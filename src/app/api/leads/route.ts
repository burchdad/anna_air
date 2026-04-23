import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  urgencyWindow?: string;
  preferredContact?: "call" | "text" | "email";
  smsOptIn?: boolean;
  isEmergency?: boolean;
  submittedAt?: string;
  attribution?: {
    landingPage?: string;
    referrer?: string;
    userAgent?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmTerm?: string;
    utmContent?: string;
    gclid?: string;
    fbclid?: string;
    msclkid?: string;
  };
};

function hasRequiredFields(payload: LeadPayload) {
  return Boolean(payload.name && payload.phone && payload.email && payload.service && payload.message);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;

    if (!hasRequiredFields(payload)) {
      return NextResponse.json({ error: "Missing required lead fields" }, { status: 400 });
    }

    const webhookUrl = process.env.LEADS_WEBHOOK_URL;
    const webhookToken = process.env.LEADS_WEBHOOK_TOKEN;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookToken ? { Authorization: `Bearer ${webhookToken}` } : {}),
        },
        body: JSON.stringify(payload),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          { error: "Lead forwarding failed", status: webhookResponse.status },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({ ok: true, forwarded: Boolean(webhookUrl) }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }
}
