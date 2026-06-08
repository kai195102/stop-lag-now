import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Zap, ChevronDown, Wifi, WifiOff, Cpu, Gamepad2, HardDrive, Shield,
  Smartphone, Rocket, Settings, BarChart3, Thermometer,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stop Lag Forever — Lag-Free Gaming Guide" },
      { name: "description", content: "Master lag-free gaming with our comprehensive guide to eliminating network lag, input delay, and performance issues across all platforms." },
      { property: "og:title", content: "Stop Lag Forever" },
      { property: "og:description", content: "Eliminate network lag, input delay, and performance issues across all platforms." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const solutions = [
  { Icon: Wifi, title: "Network Optimization", items: ["Use wired Ethernet connection", "Configure QoS settings", "Choose optimal DNS servers", "Close bandwidth-heavy apps"] },
  { Icon: Cpu, title: "System Performance", items: ["Update graphics drivers", "Disable Windows Game Mode", "Set high performance power plan", "Close unnecessary programs"] },
  { Icon: Gamepad2, title: "In-Game Settings", items: ["Lower graphics settings", "Disable V-Sync", "Reduce render distance", "Use competitive settings"] },
  { Icon: HardDrive, title: "Storage Solutions", items: ["Install games on SSD", "Clear temporary files", "Defragment hard drives", "Free up disk space"] },
  { Icon: Shield, title: "Security & Background", items: ["Manage Defender exclusions", "Pause antivirus during play", "Stop background updates", "Close streaming apps"] },
  { Icon: Smartphone, title: "Mobile Gaming", items: ["Enable game mode", "Close other apps", "Use 5GHz WiFi", "Keep device cool"] },
];

const tips = [
  { Icon: Rocket, title: "Quick Wins", body: "Restart your router weekly, try reputable DNS servers like 1.1.1.1 or 8.8.8.8, and connect on the 5GHz WiFi band for immediate improvements." },
  { Icon: Zap, title: "Advanced Tweaks", body: "Enable Game Mode in Windows 11, set CPU priority to High for your games, and disable fullscreen optimizations in compatibility settings." },
  { Icon: Settings, title: "Hardware Upgrades", body: "Invest in a gaming router with QoS, upgrade to 16GB+ RAM, and consider a monitor with a 1ms response time and low input lag." },
  { Icon: BarChart3, title: "Monitor Performance", body: "Use tools like MSI Afterburner for FPS monitoring, check ping from the command line, and watch CPU/GPU usage during gameplay." },
  { Icon: WifiOff, title: "Reduce Interference", body: "Place your router away from other electronics, use channels 1, 6, or 11 on 2.4GHz, and minimize obstacles between your device and router." },
  { Icon: Thermometer, title: "Temperature Control", body: "Keep your PC well-ventilated, clean dust from fans regularly, and ensure proper airflow to prevent thermal throttling." },
];

const faqs = [
  { q: "What's considered good ping for gaming?", a: "Under 20ms is excellent, 20–50ms is good, 50–100ms is playable, and above 100ms will cause noticeable lag in competitive games." },
  { q: "Should I use WiFi or Ethernet?", a: "Use Ethernet when possible. Wired connections are more stable, have lower latency, and aren't affected by wireless interference." },
  { q: "Does a gaming router really help?", a: "Yes. Gaming routers with QoS prioritize gaming traffic, reduce bufferbloat, and often have better processors for handling many devices." },
  { q: "Why do I lag only in certain games?", a: "Different games have varying optimization levels, server locations, and netcode quality. Some games also demand more system resources." },
  { q: "Will these tips work on consoles?", a: "Most network and connection tips apply to consoles too. Use wired connections, prioritize gaming traffic, and keep the system updated for the best results." },
];

function Reveal({ as: Tag = "div", className = "", children, ...rest }: { as?: any; className?: string; children: React.ReactNode; [k: string]: any }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as any} className={`animate-on-scroll ${shown ? "in-view" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-content">
          <a href="#top" className="logo">
            <span className="logo-icon"><Zap /></span>
            <span className="logo-text">Stop Lag</span>
          </a>
          <nav className="nav-desktop">
            <a href="#services" className="nav-link">Solutions</a>
            <a href="#about" className="nav-link">Tips</a>
            <a href="#contact" className="nav-link">FAQ</a>
            <a href="#services" className="btn btn-primary">Get Started</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg-orb hero-bg-orb-1" />
        <div className="hero-bg-orb hero-bg-orb-2" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-icon"><Zap /></div>
          <h1 className="hero-title">Stop Lag Forever</h1>
          <p className="hero-description">
            Master the art of lag-free gaming with our comprehensive guide to eliminating network lag,
            input delay, and performance issues across all platforms.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary btn-lg">Start Optimizing Now</a>
            <a href="#about" className="btn btn-secondary btn-lg">Learn More</a>
          </div>
        </div>
        <a href="#services" className="scroll-indicator" aria-label="Scroll down">
          <ChevronDown style={{ width: 32, height: 32 }} />
        </a>
      </section>

      <section className="services" id="services">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-badge">Solutions</span>
            <h2 className="section-title">Universal Solutions</h2>
            <p className="section-subtitle">Comprehensive gaming performance solutions to eliminate lag across all platforms</p>
          </Reveal>
          <div className="services-grid">
            {solutions.map(({ Icon, title, items }) => (
              <Reveal key={title} className="service-card">
                <div className="service-card-content">
                  <div className="service-icon"><Icon /></div>
                  <h3 className="service-title">{title}</h3>
                  <ul className="service-list">
                    {items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-badge">Tips</span>
            <h2 className="section-title">Pro Tips for Zero Lag</h2>
            <p className="section-subtitle">Expert strategies to eliminate lag and maximize your gaming performance</p>
          </Reveal>
          <div className="services-grid">
            {tips.map(({ Icon, title, body }) => (
              <Reveal key={title} className="service-card">
                <div className="service-card-content">
                  <div className="service-icon"><Icon /></div>
                  <h3 className="service-title">{title}</h3>
                  <p className="service-description">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <Reveal className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common questions about eliminating lag and optimizing gaming performance</p>
          </Reveal>
          <div className="faq-container">
            {faqs.map((f, i) => (
              <Reveal key={f.q} className={`faq-item ${openFaq === i ? "active" : ""}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <h3>{f.q}</h3>
                  <ChevronDown className="faq-icon" />
                </button>
                <div className="faq-answer"><p>{f.a}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div className="logo">
            <span className="logo-icon"><Zap /></span>
            <span className="logo-text">Stop Lag</span>
          </div>
          <span className="footer-copyright">© {new Date().getFullYear()} stoplag.org — All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
