"use client";

import { useState, useEffect } from "react";
import { inquiryTypes, industries } from "@/content/vertex";
import { useAnalytics } from "@/hooks/useAnalytics";

export type InquiryType = "pilot" | "partnership" | "enterprise";

interface ContactFormProps {
  initialInquiryType?: InquiryType;
}

export default function ContactForm({
  initialInquiryType,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>(
    initialInquiryType ?? "pilot"
  );

  useEffect(() => {
    if (initialInquiryType) {
      setInquiryType(initialInquiryType);
    }
  }, [initialInquiryType]);
  const { track } = useAnalytics();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
      inquiryType: formData.get("inquiryType") as string,
      industry: formData.get("industry") as string,
      message: formData.get("message") as string,
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send");
        return;
      }

      track(
        `contact_submit_${payload.inquiryType}` as "contact_submit_pilot" | "contact_submit_partnership" | "contact_submit_enterprise"
      );
      setStatus("success");
      form.reset();
      setInquiryType("pilot");
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="inquiryType" className="sr-only">
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={inquiryType}
          onChange={(e) =>
            setInquiryType(e.target.value as InquiryType)
          }
          required
          className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors"
        >
          {inquiryTypes.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-gray-900">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors"
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors"
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors"
      />
      <div>
        <label htmlFor="industry" className="sr-only">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors"
        >
          <option value="" className="bg-gray-900">
            Industry (optional)
          </option>
          {industries.map((ind) => (
            <option key={ind} value={ind} className="bg-gray-900">
              {ind}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Message"
        className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors resize-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 rounded-lg font-medium border border-electric-blue text-electric-blue bg-electric-blue/5 hover:bg-electric-blue/10 btn-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Send"}
      </button>
      {status === "success" && (
        <p className="text-sm text-cyber-lime">Message sent successfully.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
