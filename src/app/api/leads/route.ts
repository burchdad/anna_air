import { Resend } from "resend";
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

    // Send email to business owner
    if (process.env.RESEND_API_KEY && process.env.BUSINESS_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@annasair.com",
        to: process.env.BUSINESS_EMAIL,
        subject: `New Service Request: ${payload.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; color: #333;">
            <h2 style="color: #ec4899;">New Service Request</h2>
            <p style="margin-bottom: 20px;"><strong>Customer Details:</strong></p>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0;"><strong>Name:</strong></td>
                <td style="padding: 8px 0;">${payload.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0;"><a href="tel:${payload.phone}">${payload.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;"><a href="mailto:${payload.email}">${payload.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Service Type:</strong></td>
                <td style="padding: 8px 0;">${payload.service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Urgency:</strong></td>
                <td style="padding: 8px 0;">${payload.urgencyWindow || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Preferred Contact:</strong></td>
                <td style="padding: 8px 0;">${payload.preferredContact || "Not specified"}</td>
              </tr>
              ${payload.isEmergency ? `<tr style="background-color: #fce7f3;"><td style="padding: 8px; color: #be123c;"><strong>🚨 EMERGENCY:</strong></td><td style="padding: 8px; color: #be123c;">Marked as emergency service</td></tr>` : ""}
            </table>
            
            <p style="margin-bottom: 8px;"><strong>Request Details:</strong></p>
            <p style="background-color: #f3f4f6; padding: 12px; border-left: 4px solid #ec4899; margin-bottom: 20px;">
              ${(payload.message || "").replace(/\n/g, "<br />")}
            </p>
            
            <p style="font-size: 12px; color: #666; margin-top: 20px;">
              SMS Opt-in: ${payload.smsOptIn ? "Yes" : "No"}<br />
              Submitted at: ${new Date(payload.submittedAt || Date.now()).toLocaleString()}
            </p>
          </div>
        `,
      });
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
