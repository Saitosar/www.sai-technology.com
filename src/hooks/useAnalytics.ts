/**
 * Lightweight analytics hook. Extend with your provider (GA, Plausible, etc.).
 * Events: cta_pilot_click, cta_partnership_click, cta_enterprise_click, contact_submit_{type}
 */
export type AnalyticsEvent =
  | "cta_pilot_click"
  | "cta_partnership_click"
  | "cta_enterprise_click"
  | "contact_submit_pilot"
  | "contact_submit_partnership"
  | "contact_submit_enterprise";

export function useAnalytics() {
  const track = (event: AnalyticsEvent, data?: Record<string, unknown>) => {
    if (typeof window === "undefined") return;
    // Extend: window.gtag?.("event", event, data) or your provider
    if (process.env.NODE_ENV === "development") {
      console.debug("[analytics]", event, data);
    }
  };
  return { track };
}
