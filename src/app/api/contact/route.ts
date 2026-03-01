import { NextRequest, NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  if (!N8N_WEBHOOK_URL) {
    return NextResponse.json(
      { error: "Contact form is not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const {
      name,
      email,
      message,
      company,
      role,
      inquiryType,
      industry,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      message,
      company: company || "",
      role: role || "",
      inquiryType: inquiryType || "",
      industry: industry || "",
    };

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("n8n webhook error:", response.status, text);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
