export function CalEmbed() {
  return (
    <div className="rounded-3xl border border-border bg-surface/60 overflow-hidden shadow-card">
      <iframe
        src="https://cal.com/ooyaeenah-ahmed/30-min-consultation?embed=true&theme=dark&layout=month_view"
        width="100%"
        height="680"
        style={{ border: 0, display: "block" }}
        title="Book a 30 minute consultation"
        loading="lazy"
      />
    </div>
  );
}
