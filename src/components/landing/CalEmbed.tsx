import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export function CalEmbed() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("cal-embed-script")) {
      try {
        window.Cal?.("init", "30-min-consultation", { origin: "https://cal.com" });
        window.Cal?.ns?.["30-min-consultation"]?.("inline", {
          elementOrSelector: "#cal-inline",
          config: { layout: "month_view", theme: "dark" },
          calLink: "ooyaeenah-ahmed/30-min-consultation",
        });
        window.Cal?.ns?.["30-min-consultation"]?.("ui", {
          theme: "dark",
          cssVarsPerTheme: { dark: { "cal-brand": "#16C6C6" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch {}
      return;
    }
    const s = document.createElement("script");
    s.id = "cal-embed-script";
    s.innerHTML = `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "30-min-consultation", {origin:"https://cal.com"});
    Cal.ns["30-min-consultation"]("inline", { elementOrSelector:"#cal-inline", config: {"layout":"month_view","theme":"dark"}, calLink: "ooyaeenah-ahmed/30-min-consultation" });
    Cal.ns["30-min-consultation"]("ui", { "theme":"dark","cssVarsPerTheme":{"dark":{"cal-brand":"#16C6C6"}}, "hideEventTypeDetails": false, "layout":"month_view" });`;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="rounded-3xl border border-border bg-surface/60 overflow-hidden shadow-card">
      <div id="cal-inline" style={{ width: "100%", minHeight: 680 }} />
    </div>
  );
}
