import { useState, useEffect } from "react";
import "../Styles/intro.css"

type Role = "People" | "Organizers";

const FEATURES = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="12" r="7" strokeDasharray="2 2" />
                <circle cx="12" cy="12" r="11" strokeOpacity="0.3" />
            </svg>
        ),
        title: "Real-time Monitoring",
        desc: "Live density heatmaps refreshed every 500ms. Watch the venue breathe and adapt instantly.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "Overcrowding Alerts",
        desc: "Automated threshold-based alerts fire the exact moment a zone approaches critical capacity.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M14 17.5h7M17.5 14v7" />
            </svg>
        ),
        title: "Zone Analytics",
        desc: "Deep-dive into flow patterns, dwell times, and historical density curves for granular optimization.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a9 9 0 1 1 0 18A9 9 0 0 1 12 2z" strokeOpacity="0.3" />
                <path d="M12 6v6l4 2" />
                <path d="M16 16l2 2" strokeLinecap="round" />
            </svg>
        ),
        title: "Predictive Intelligence",
        desc: "AI-driven recommendations help security and operators mitigate bottlenecks before they form.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        title: "Interactive Blueprints",
        desc: "Upload static venue maps and instantly convert them into live, interactive navigation grids.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "Dynamic Evacuation",
        desc: "Shortest-path algorithms dynamically guide every individual to their safest, least-congested exit.",
    },
];

const CONTENT = {
    People: {
        badge: "Live Updates",
        tagline: "Move with confidence.",
        description:
            "Check real-time venue occupancy before you arrive. Receive live crowd-flow warnings and personalized safe-route navigation so you can enjoy every event stress-free.",
        cta: "Get The App",
        href: "/dashboard",
    },
    Organizers: {
        badge: "Admin Access",
        tagline: "Command every square meter.",
        description:
            "Monitor thousands of attendees with surgical precision. Dispatch rapid alerts to staff, analyze density trends, and utilize AI-guided insights to prevent crises.",
        cta: "Go to Dashboard",
        href: "/dashboard",
    },
};

const PROBLEMS = [
    { stat: "90%", label: "of stampede incidents stem from a lack of clear, dynamic evacuation guidance" },
    { stat: "0", label: "attendees instinctively know their optimal, least-crowded exit during a panic" },
    { stat: "1000s", label: "of people cannot be managed simultaneously by traditional emergency responders" },
];

const SOLUTION_STEPS = [
    { num: "01", title: "Map Ingestion", desc: "Organizers upload standard venue blueprints to generate a digital twin." },
    { num: "02", title: "Seamless Sync", desc: "Attendees connect via a quick QR scan to sync with the venue's live grid." },
    { num: "03", title: "Crisis Detection", desc: "If an emergency triggers panic mode, the platform instantly shifts to evacuation protocol." },
    { num: "04", title: "Dynamic Routing", desc: "Every connected device receives a custom, real-time route to the safest exit." },
];

const TECH_STACK = [
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" /><line x1="12" y1="22" x2="12" y2="15.5" /><polyline points="22 8.5 12 15.5 2 8.5" /></svg>,
        name: "React.js + Leaflet", role: "Frontend",
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
        name: "Node.js", role: "Backend",
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
        name: "WebSockets", role: "Real-time",
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
        name: "Firebase / Mongo", role: "Database",
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>,
        name: "Dijkstra / A*", role: "Pathfinding",
    },
];

const USE_CASES = [
    { icon: "🏟", label: "Sports Stadiums" },
    { icon: "🎵", label: "Live Concerts" },
    { icon: "🎓", label: "Campus Festivals" },
    { icon: "🏬", label: "Shopping Malls" },
    { icon: "✈️", label: "Transit Hubs" },
    { icon: "🆘", label: "Disaster Zones" },
];

const ROADMAP = [
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" /></svg>,
        title: "IoT Sensor Grids", desc: "Plug-and-play physical sensors feeding hyper-accurate local density data.",
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 12h10M12 7v10" /></svg>,
        title: "CCTV Integration", desc: "Computer-vision overlays on existing security cameras to automate headcounts.",
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: "Municipal API Hooks", desc: "Direct pipelines to city emergency management and first-responder dispatchers.",
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" /></svg>,
        title: "OS-Level Alerts", desc: "Bypassing apps entirely with critical mobile broadcast notifications.",
    },
    {
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
        title: "Predictive ML", desc: "Machine-learning models that forecast density spikes minutes before they happen.",
    },
];

export default function IntroPage() {
    const [role, setRole] = useState<Role>("People");
    const [animKey, setAnimKey] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 60);
        return () => clearTimeout(t);
    }, []);

    const handleToggle = (next: Role) => {
        if (next === role) return;
        setRole(next);
        setAnimKey((k) => k + 1);
    };

    const c = CONTENT[role];

    return (
        <div className={`ip-root${visible ? " ip-visible" : ""}`}>
            <div className="ip-bg" aria-hidden="true">
                <div className="ip-orb ip-orb1" />
                <div className="ip-orb ip-orb2" />
                <div className="ip-orb ip-orb3" />
                <div className="ip-grid" />
            </div>

            <nav className="ip-nav ip-anim-fadedown">
                <span className="ip-logo">
                    <span className="ip-logo-dot" />
                    CrowdSync
                </span>
                <div className="ip-toggle" role="group" aria-label="Select view">
                    <div className={`ip-thumb ip-thumb--${role === "Organizers" ? "right" : "left"}`} />
                    {(["People", "Organizers"] as Role[]).map((r) => (
                        <button
                            key={r}
                            className={`ip-toggle-btn${role === r ? " ip-toggle-btn--active" : ""}`}
                            onClick={() => handleToggle(r)}
                            aria-pressed={role === r}
                        >
                            {r}
                        </button>
                    ))}
                </div>
            </nav>

            <section className="ip-hero">
                <div key={`badge-${animKey}`} className="ip-badge-wrap ip-anim-fadein">
                    <span className="ip-badge">
                        <span className="ip-badge-dot" />
                        {c.badge}
                    </span>
                </div>
                <h1 className="ip-headline ip-anim-fadeup ip-delay1">
                    CrowdSync<br />
                    <span className="ip-headline-accent">Intelligent Management</span>
                </h1>
                <p className="ip-subtitle ip-anim-fadeup ip-delay2">
                    {c.tagline}
                </p>
                <p key={`desc-${animKey}`} className="ip-desc ip-anim-fadein">
                    {c.description}
                </p>
                <div key={`cta-${animKey}`} className="ip-cta-row ip-anim-fadeup ip-delay3">
                    <a href={c.href} className="ip-btn-primary">
                        <span>{c.cta}</span>
                        <svg className="ip-btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#features" className="ip-btn-ghost">Explore Features</a>
                </div>
                <div className="ip-stats ip-anim-fadeup ip-delay4">
                    {[
                        { v: "99.9%", l: "Uptime" },
                        { v: "<500ms", l: "Sync Latency" },
                        { v: "Live", l: "Pathfinding" },
                    ].map((s) => (
                        <div className="ip-stat" key={s.l}>
                            <span className="ip-stat-val">{s.v}</span>
                            <span className="ip-stat-lbl">{s.l}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ip-problem">
                <p className="ip-eyebrow ip-anim-fadeup ip-delay1">The Problem</p>
                <h2 className="ip-section-title ip-anim-fadeup ip-delay2">
                    Traditional evacuation systems<br />
                    <span className="ip-headline-accent">are static, not intelligent.</span>
                </h2>
                <p className="ip-section-sub ip-anim-fadeup ip-delay2">
                    Venue blueprints are rarely utilized for real-time threat mitigation. When panic strikes, crowds are left entirely without dynamic guidance.
                </p>
                <div className="ip-problem-grid">
                    {PROBLEMS.map((p, i) => (
                        <div
                            className="ip-problem-card ip-anim-slideup"
                            key={p.label}
                            style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                        >
                            <span className="ip-problem-stat">{p.stat}</span>
                            <p className="ip-problem-label">{p.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ip-solution">
                <p className="ip-eyebrow ip-anim-fadeup ip-delay1">Solution Flow</p>
                <h2 className="ip-section-title ip-anim-fadeup ip-delay2">
                    From static blueprint to<br />
                    <span className="ip-headline-accent">safe evacuation in seconds.</span>
                </h2>
                <div className="ip-steps">
                    {SOLUTION_STEPS.map((s, i) => (
                        <div
                            className="ip-step ip-anim-slideup"
                            key={s.num}
                            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                        >
                            <span className="ip-step-num">{s.num}</span>
                            <h3 className="ip-step-title">{s.title}</h3>
                            <p className="ip-step-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ip-features" id="features">
                <p className="ip-eyebrow ip-anim-fadeup ip-delay1">Core Capabilities</p>
                <h2 className="ip-features-title ip-anim-fadeup ip-delay2">
                    Everything you need.<br />Nothing you don't.
                </h2>
                <div className="ip-grid-cards">
                    {FEATURES.map((f, i) => (
                        <div
                            className="ip-card ip-anim-slideup"
                            key={f.title}
                            style={{ animationDelay: `${0.15 + i * 0.1}s` }}
                        >
                            <div className="ip-card-icon">{f.icon}</div>
                            <h3 className="ip-card-title">{f.title}</h3>
                            <p className="ip-card-desc">{f.desc}</p>
                            <div className="ip-card-bar" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="ip-tech">
                <p className="ip-eyebrow ip-anim-fadeup ip-delay1">Tech Stack</p>
                <h2 className="ip-section-title ip-anim-fadeup ip-delay2">
                    Built on proven,<br />
                    <span className="ip-headline-accent">battle-tested architecture.</span>
                </h2>
                <div className="ip-tech-grid">
                    {TECH_STACK.map((t, i) => (
                        <div
                            className="ip-tech-card ip-anim-slideup"
                            key={t.name}
                            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                        >
                            <div className="ip-tech-icon">{t.icon}</div>
                            <span className="ip-tech-role">{t.role}</span>
                            <span className="ip-tech-name">{t.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ip-usecases">
                <p className="ip-eyebrow ip-anim-fadeup ip-delay1">Use Cases</p>
                <h2 className="ip-section-title ip-anim-fadeup ip-delay2">
                    Everywhere people gather,<br />
                    <span className="ip-headline-accent">safety should follow.</span>
                </h2>
                <div className="ip-usecase-grid">
                    {USE_CASES.map((u, i) => (
                        <div
                            className="ip-usecase-pill ip-anim-fadeup"
                            key={u.label}
                            style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                        >
                            <span className="ip-usecase-emoji">{u.icon}</span>
                            <span>{u.label}</span>
                        </div>
                    ))}
                </div>
                <p className="ip-usecase-footer ip-anim-fadeup ip-delay3">
                    Designed for seamless integration with smart city infrastructure
                </p>
            </section>

            <section className="ip-roadmap">
                <p className="ip-eyebrow ip-anim-fadeup ip-delay1">Future Roadmap</p>
                <h2 className="ip-section-title ip-anim-fadeup ip-delay2">
                    The next evolution<br />
                    <span className="ip-headline-accent">of crowd safety.</span>
                </h2>
                <div className="ip-roadmap-grid">
                    {ROADMAP.map((r, i) => (
                        <div
                            className="ip-roadmap-card ip-anim-slideup"
                            key={r.title}
                            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                        >
                            <div className="ip-roadmap-icon">{r.icon}</div>
                            <h3 className="ip-roadmap-title">{r.title}</h3>
                            <p className="ip-roadmap-desc">{r.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="ip-conclusion">
                <div className="ip-conclusion-inner ip-anim-fadeup ip-delay1">
                    <p className="ip-conclusion-quote">
                        "Technology should not only connect us —<br />
                        <span className="ip-headline-accent">it should protect us.</span>"
                    </p>
                    <p className="ip-conclusion-sub">
                        CrowdSync delivers faster evacuations, eliminated bottlenecks, and radically safer large-scale events.
                    </p>
                    <div className="ip-cta-row" style={{ justifyContent: "center" }}>
                        <a href="/dashboard" className="ip-btn-primary">
                            <span>Launch Platform</span>
                            <svg className="ip-btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <p className="ip-conclusion-team">Built by Team Vertex</p>
                </div>
            </section>
            
            <footer className="ip-footer">
                © {new Date().getFullYear()} CrowdSync — Intelligent Crowd Management · Team Vertex
            </footer>
        </div>
    );
}