import { createFileRoute } from "@tanstack/react-router";
import { Zap, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stop Lag Forever — Lag-Free Gaming Guide" },
      { name: "description", content: "Master lag-free gaming with our comprehensive guide to eliminating network lag, input delay, and performance issues across all platforms." },
      { property: "og:title", content: "Stop Lag Forever" },
      { property: "og:description", content: "Eliminate network lag, input delay, and performance issues across all platforms." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const solutions = [
  { title: "Network Optimization", items: ["Use wired Ethernet connection", "Configure QoS settings", "Choose optimal DNS servers", "Close bandwidth-heavy apps"] },
  { title: "System Performance", items: ["Update graphics drivers", "Disable Windows Game Mode", "Set high performance power plan", "Close unnecessary programs"] },
  { title: "In-Game Settings", items: ["Lower graphics settings", "Disable V-Sync", "Reduce render distance", "Use competitive settings"] },
  { title: "Storage Solutions", items: ["Install games on SSD", "Clear temporary files", "Defragment hard drives", "Free up disk space"] },
  { title: "Security & Background", items: ["Manage Windows Defender exclusions", "Pause antivirus scans during play", "Stop background updates", "Close streaming apps"] },
  { title: "Mobile Gaming", items: ["Enable game mode", "Close other apps", "Use 5GHz WiFi", "Keep device cool"] },
];

const tips = [
  { title: "Quick Wins", body: "Restart your router weekly, try reputable DNS servers like 1.1.1.1 or 8.8.8.8, and connect on the 5GHz WiFi band for immediate improvements." },
  { title: "Advanced Tweaks", body: "Enable Game Mode in Windows 11, set CPU priority to High for your games, and disable fullscreen optimizations in compatibility settings." },
  { title: "Hardware Upgrades", body: "Invest in a gaming router with QoS, upgrade to 16GB+ RAM, and consider a monitor with low input lag and a 1ms response time." },
  { title: "Monitor Performance", body: "Use tools like MSI Afterburner for FPS monitoring, check ping with the command line, and watch CPU/GPU usage during gameplay." },
  { title: "Reduce Interference", body: "Place your router away from other electronics, use channels 1, 6, or 11 on 2.4GHz, and minimize obstacles between your device and router." },
  { title: "Temperature Control", body: "Keep your PC well-ventilated, clean dust from fans regularly, and ensure proper airflow to prevent thermal throttling." },
];

const faqs = [
  { q: "What's considered good ping for gaming?", a: "Under 20ms is excellent, 20–50ms is good, 50–100ms is playable, and above 100ms will cause noticeable lag in competitive games." },
  { q: "Should I use WiFi or Ethernet?", a: "Use Ethernet when possible. Wired connections are more stable, have lower latency, and aren't affected by wireless interference." },
  { q: "Does a gaming router really help?", a: "Yes. Gaming routers with QoS prioritize gaming traffic, reduce bufferbloat, and often have better processors for handling many devices." },
  { q: "Why do I lag only in certain games?", a: "Different games have varying optimization levels, server locations, and netcode quality. Some games also demand more system resources." },
  { q: "Will these tips work on consoles?", a: "Most network and connection tips apply to consoles too. Use wired connections, prioritize gaming traffic, and keep the system updated for the best results." },
];

function Section({ id, label, title, subtitle, children }: { id: string; label: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-3">{label}</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" strokeWidth={2.5} />
            </span>
            Stop Lag
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#solutions" className="hover:text-foreground transition">Solutions</a>
            <a href="#tips" className="hover:text-foreground transition">Tips</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <a href="#solutions" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition">
            Get Started
          </a>
        </div>
      </header>

      <section id="top" className="glow relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-8 shadow-2xl">
          <Zap className="w-10 h-10 text-primary" strokeWidth={2.5} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Stop Lag Forever</h1>
        <p className="max-w-2xl text-lg text-muted-foreground mb-10">
          Master the art of lag-free gaming with our comprehensive guide to eliminating network lag, input delay, and performance issues across all platforms.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#solutions" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition">Start Optimizing Now</a>
          <a href="#tips" className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-card transition">Learn More</a>
        </div>
        <a href="#solutions" className="absolute bottom-10 text-muted-foreground animate-bounce" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      <Section id="solutions" label="Solutions" title="Universal Solutions" subtitle="Comprehensive gaming performance solutions to eliminate lag across all platforms">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition">
              <h3 className="font-bold text-lg mb-4">{s.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-primary">›</span>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="tips" label="Tips" title="Pro Tips for Zero Lag" subtitle="Expert strategies to eliminate lag and maximize your gaming performance">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((t) => (
            <div key={t.title} className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-3 text-primary">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about eliminating lag and optimizing gaming performance">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 rounded-xl bg-card border border-border">
              <summary className="cursor-pointer font-semibold flex justify-between items-center">
                {f.q}
                <ChevronDown className="w-5 h-5 text-primary transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-primary" />
          <span className="font-semibold text-foreground">Stop Lag</span>
        </div>
        © {new Date().getFullYear()} stoplag.org — All rights reserved.
      </footer>
    </div>
  );
}
