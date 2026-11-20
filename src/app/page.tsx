"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SiteHeader,
  SiteFooter,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
  FACEBOOK_URL,
} from "../components/site-chrome";

const SERVICES = [
  {
    icon: "wrench",
    title: "Handyman",
    text: "From door repairs and squeaky flooring to TV wall installations and damp sealing, let me be your local handyman. I undertake all work, and no project is too large or small.",
    points: ["Home upgrades & odd jobs", "Gutter cleaning & pressure washing", "Door hardware & appliance installation", "Furniture assembly"],
  },
  {
    icon: "chair",
    title: "Carpenter",
    text: "My carpentry services include (but are not limited to) lock adjusting, door panel repairs, skirting board installation, sash window repairs and more. I can help with all types of properties, from new builds to period homes.",
    points: ["Floors & doors", "Garden sheds & decking", "Fences & shelves", "Kitchen units"],
  },
  {
    icon: "bolt",
    title: "Electrician",
    text: "Whether you’d like me to install a new light fixture or fix an outdoor plug socket, I’ve been working as an electrician for over fifteen years. I’ve seen and done a lot, so you can rest assured that you’ve found the right guy for the job.",
    points: ["Switches, sockets & transfers", "Light fixture repair & replacement", "Outdoor & garden lights", "Immersion heaters & electric showers"],
  },
  {
    icon: "drop",
    title: "Plumber",
    text: "With my plumbing services, I can help with a range of projects, including kitchen tap replacement, washing machine repairs and replacement, shower tray sealing, and leak repairs. No project is too intricate, so please get in touch to discuss your ideas.",
    points: ["Sinks, basins & toilet repair", "Drain unblocking & leak fixing", "Plumbing repairs & installation", "Complete bathroom refurbishment"],
  },
  {
    icon: "paint",
    title: "Painter",
    text: "Looking to redecorate? I can help to seamlessly repaint any room in your home. Whether you’re looking for a fresh lick of white paint or something more upbeat and colourful, let me help you effectively change your room in no time at all.",
    points: ["Inside & outside painting", "Doors, windows & kitchen units", "Fences, sheds & wood staining"],
  },
  {
    icon: "brush",
    title: "Tiler",
    text: "I can happily lay both floor and wall tiling and can provide the correct materials in order to do so. I can also assist you in choosing the correct tiles for your needs, simply get in touch for more information.",
    points: ["Kitchen & bathroom tiling", "Shower grouting repair", "Wall & floor tiling", "Mosaic tiles laying"],
  },
];

const WORKS = [
  { img: "/images/bathroom-refurb-goatstown.webp", tag: "Bathrooms", cat: "Repairs", title: "Bathroom Refurbishment, Goatstown", text: "Full bathroom refurbishment completed in Goatstown, Dublin." },
  { img: "/images/cabinets-foxrock.webp", tag: "Carpentry", cat: "Carpentry", title: "Cabinets, Foxrock", text: "Custom cabinets fitted in Foxrock, Dublin." },
  { img: "/images/kitchen-harolds-cross.webp", tag: "Bath & Kitchen", cat: "Repairs", title: "Kitchen Renovation, Harold's Cross", text: "Kitchen renovation completed in Harold's Cross, Dublin." },
  { img: "/images/bedroom-ballsbridge.webp", tag: "Bedrooms", cat: "Repairs", title: "Bedroom Renovation, Ballsbridge", text: "Bedroom renovation completed in Ballsbridge, Dublin." },
  { img: "/images/wallpaper-ranelagh.webp", tag: "Tiling & Paint", cat: "Tiling & Paint", title: "Wallpaper Hanging, Ranelagh", text: "Wallpaper hanging completed in Ranelagh, Dublin." },
  { img: "/images/entrance-door-sandyford.webp", tag: "Carpentry", cat: "Carpentry", title: "Entrance Door, Sandyford", text: "Wooden entrance door fitted in Sandyford, Dublin." },
];

const TESTIMONIALS = [
  {
    quote: "I have nothing but great things to say about our new handyman — he has done 6 jobs for us so far, from replacing a tap to taking apart and fixing our pull-out larder. He can do anything and whatever he does is done to a very high standard. He is polite, reliable, extremely hard working and very professional. I honestly couldn't recommend him more highly.",
    name: "Mide Stevens",
    area: "Dublin",
    initials: "MS",
  },
  {
    quote: "Called over quickly, had a backup part (to replace the new one we had bought and didn't fit), job done no problem. That guy knows his job — we'll call him again!",
    name: "Valerie O'Connor",
    area: "Dublin",
    initials: "VO",
  },
  {
    quote: "I was very impressed with Julian. Did all the jobs required and v. good price. Will definitely recommend him and will certainly get him to do any other jobs I may need.",
    name: "Antoinette Treacy",
    area: "Dublin",
    initials: "AT",
  },
];

const WHY = [
  { title: "Punctual & Professional", text: "I have a proven record of high-quality accomplishments and I pride myself on my professionalism. I always aim to be on time for my customers." },
  { title: "Honest & Dependable", text: "For me, honesty is the only policy and I strive to complete all projects with integrity and fairness, not just with my clients, but also with my suppliers and subcontractors." },
  { title: "Passionate & Always Improving", text: "I use the best of technology and tools to ensure that all jobs are done quickly, but also give attention to detail and ensure everything is done correctly." },
  { title: "15+ Years of Experience", text: "Over fifteen years working across Dublin homes — from new builds to period homes — and I only offer high-quality finishes on all of my services." },
  { title: "No Job Too Small", text: "No project is too large or small — from a single tap to a full bathroom refurbishment. If it needs fixing, call Julian." },
  { title: "24h Emergency Call-Outs", text: "Weekends and bank holidays — 24-hour emergency call-outs when you need me most." },
];

function ServiceIcon({ name }: { name: string }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "wrench":
      return (<svg {...common}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>);
    case "paint":
      return (<svg {...common}><rect x="3" y="4" width="14" height="6" rx="1" /><path d="M7 10v4a2 2 0 0 0 4 0V10" /><path d="M9 16v4" /></svg>);
    case "brush":
      return (<svg {...common}><path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" /><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" /></svg>);
    case "drop":
      return (<svg {...common}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>);
    case "bolt":
      return (<svg {...common}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></svg>);
    case "door":
      return (<svg {...common}><rect x="4" y="3" width="16" height="18" rx="1" /><circle cx="15" cy="12" r="1" /></svg>);
    case "chair":
      return (<svg {...common}><path d="M6 3v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" /><path d="M4 13h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z" /><path d="M6 20v1M18 20v1" /></svg>);
    case "leaf":
      return (<svg {...common}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>);
    default:
      return (<svg {...common}><path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" /><path d="M9 21V12h6v9" /></svg>);
  }
}

export default function Home() {
  const [filter, setFilter] = useState("All Projects");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Handyman", details: "" });

  const shownWorks = filter === "All Projects" ? WORKS : WORKS.filter((w) => w.cat === filter);

  function submitQuote(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Julian, I'd like a free estimate.\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService needed: ${form.service}\n\nProject details:\n${form.details}`
    );
    window.open(`https://wa.me/353871223254?text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="hero" id="home" style={{ paddingTop: 84, paddingBottom: 96 }}>
          <div className="container hero-grid">
            <div>
              <span className="eyebrow light">Your Local Handyman, Whenever You Need One</span>
              <h1>Your Local Handyman, Whenever You Need One</h1>
              <p className="lead">I have over fifteen years of experience and only offer high-quality finishes on all of my services.</p>
              <div className="hero-actions">
                <a className="btn btn-amber" href="#contact">Get a Free Estimate →</a>
                <a className="btn btn-outline" href="#services">Explore Our Services</a>
              </div>
              <div className="hero-badges">
                <span className="badge"><span className="star">★★★★★</span> Loved by Dublin homeowners</span>
                <span className="badge">✓ Free quotes</span>
                <span className="badge">✓ Dublin, Ireland</span>
              </div>
            </div>
            <div className="glass dispatch-card">
              <span><span className="live-dot" />Dispatch Active Today</span>
              <h3 style={{ marginTop: 12 }}>Need a Handyman Today?</h3>
              <p>Call Julian on 087 122 3254 — or fill in the contact form for a free quote.</p>
              <span>Call Julian</span>
              <a className="phone-big" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <a className="btn btn-amber" href={PHONE_HREF}>Call Now</a>
              <p className="note">Or <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ color: "var(--navy-2)", fontWeight: 700 }}>send a WhatsApp</a> — we reply the same day.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What we fix &amp; build</span>
              <h2>What I Can Do For You</h2>
              <p className="section-sub">Six trades, one call — and no project is too large or small.</p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article className="service-card" key={s.title}>
                  <div className="service-icon"><ServiceIcon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="check-list">
                    {s.points.map((p) => (<li key={p}>{p}</li>))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Carpentry band */}
        <section className="carpentry">
          <div className="container carpentry-grid">
            <div>
              <span className="eyebrow light">Architectural trade specialty</span>
              <h2>Custom Carpentry, Built-ins &amp; Trim Work</h2>
              <p style={{ marginTop: 14 }}>Bespoke woodworking that elevates the character of your residence. From custom fireplace mantels and pantry shelving to historic crown molding replication and porch step reconstructions.</p>
              <div className="carpentry-checks">
                <span>Baseboards &amp; Crown</span>
                <span>Custom Wall Shelves</span>
                <span>Deck &amp; Porch Restorations</span>
              </div>
              <a className="btn btn-amber" href="#contact">Book a Carpentry Consultation →</a>
              <p style={{ marginTop: 16, fontSize: "0.88rem" }}>✓ Custom material sourcing available</p>
            </div>
            <Image src="/images/entrance-door-dublin.jpg" alt="Wooden entrance door renovation, Dublin" width={640} height={380} />
          </div>
        </section>

        {/* Why us */}
        <section id="about">
          <div className="container why-grid">
            <div className="why-img-wrap">
              <Image src="/images/julian-portrait.jpg" alt="Julian, Express Handyman Dublin" width={640} height={460} />
              <div className="glass-light why-badge">
                <strong>Meet Julian</strong>
                <span>Your Express Handyman — 15+ years of experience</span>
              </div>
            </div>
            <div>
              <span className="eyebrow">The Express Handyman difference</span>
              <h2>Why Homeowners Choose Express Handyman Dublin</h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>I know how hard decorating can be when you have a long list of odd jobs that need completing — and that life can sometimes get in the way. This is where I come in.</p>
              <div className="why-list">
                {WHY.map((w) => (
                  <div className="why-item" key={w.title}>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="container stats-grid">
            <div className="stat"><b>15+</b><span>Years of experience</span></div>
            <div className="stat"><b>6</b><span>Trades covered</span></div>
            <div className="stat"><b>Dublin 2–18</b><span>Service areas</span></div>
          </div>
        </section>

        {/* How it works */}
        <section>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Simple &amp; stress-free</span>
              <h2>How It Works in 3 Easy Steps</h2>
              <p className="section-sub">We respect your time. From inquiry to job completion, our workflow is smooth, transparent, and direct.</p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-num">1</div>
                <h3>Contact Us</h3>
                <p>Tell us what needs fixing via our quick online form or give us a direct phone call. Upload a photo or describe the scope in minutes.</p>
              </div>
              <div className="step-card">
                <div className="step-num">2</div>
                <h3>Get Your Estimate</h3>
                <p>Receive a detailed, upfront estimate with clearly itemized labor and materials. Zero hidden charges, zero surprises, and no high-pressure sales.</p>
                <span className="step-tag">✓ Clear flat rates available</span>
              </div>
              <div className="step-card">
                <div className="step-num">3</div>
                <h3>We Get It Done</h3>
                <p>Sit back and relax. Our craftsmen arrive punctually with all necessary tools, finish cleanly, and stand behind their work.</p>
                <span className="step-tag">✓ 100% backed guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="gallery" style={{ background: "#fff" }}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Portfolio of craftsmanship</span>
              <h2>Recent Projects</h2>
              <p className="section-sub">Real jobs, real Dublin homes — take a look at my recent work.</p>
            </div>
            <div className="filters">
              {["All Projects", "Carpentry", "Tiling & Paint", "Repairs", "Bathrooms", "Bath & Kitchen", "Bedrooms"].map((f) => (
                <button key={f} className={`filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
            <div className="portfolio-grid">
              {shownWorks.map((w) => (
                <article className="work-card" key={w.title}>
                  <Image src={w.img} alt={w.title} width={512} height={286} />
                  <div className="work-body">
                    <span className="work-tag">{w.tag}</span>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        
        {/* Service Areas */}
        <section id="areas" style={{ background: "#fff" }}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Where we work</span>
              <h2>Proudly Serving Dublin &amp; Surrounding Areas</h2>
              <p className="section-sub">My service areas are around Dublin — and I&apos;ll be happy to work outside of Dublin County on a large project.</p>
            </div>
            <div className="areas-districts">
              {[
                { d: "Dublin 2", a: ["Merrion Square", "Trinity College", "Temple Bar", "Grafton Street", "St Stephen's Green", "Dame Street", "Leeson Street", "Grand Canal Dock"] },
                { d: "Dublin 4", a: ["Ballsbridge", "Donnybrook", "Irishtown", "Merrion", "Ringsend", "Sandymount"] },
                { d: "Dublin 6", a: ["Milltown", "Ranelagh", "Terenure", "Rathmines", "Dartry", "Rathgar"] },
                { d: "Dublin 14", a: ["Churchtown", "Clonskeagh", "Dundrum", "Goatstown", "Rathfarnham", "Windy Arbour"] },
                { d: "Dublin 16", a: ["Ballinteer", "Ballyboden", "Dundrum", "Kilmashogue", "Knocklyon", "Rathfarnham", "Rockbrook"] },
                { d: "Dublin 18", a: ["Cabinteely", "Carrickmines", "Foxrock", "Kilternan", "Sandyford", "Shankill", "Ticknock", "Ballyedmonduff", "Stepaside", "Leopardstown"] },
              ].map((g) => (
                <div key={g.d} className="area-district">
                  <strong>{g.d}</strong>
                  <div className="areas-grid">
                    {g.a.map((a) => (<span key={a} className="area-chip">{a}</span>))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials" id="reviews">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Local testimonials</span>
              <h2>What Our Customers Say in Dublin</h2>
            </div>
            <div className="testi-summary">
              <span className="stars">★★★★★</span> <b>Real reviews from happy Dublin clients</b>
            </div>
            <div className="testi-grid">
              {TESTIMONIALS.map((t) => (
                <article className="testi-card" key={t.name}>
                  <div className="stars">★★★★★</div>
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="testi-who">
                    <span className="testi-avatar">{t.initials}</span>
                    <div><strong>{t.name}</strong><span>{t.area}</span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="cta-band">
          <div className="container">
            <span className="eyebrow light">Ready to restore your home?</span>
            <h2>Express Handyman Dublin. Get Your Home Fixed Right!</h2>
            <p>Need a repair or home improvement? Let our experienced Dublin team solve it today with guaranteed craftsmanship.</p>
            <a className="btn btn-amber" href="#contact">Request Your Free Estimate →</a>
            <p className="cta-note">No obligation · Quick response · Free quotes</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Get in touch</span>
              <h2>Let&apos;s Get Your Project Started</h2>
              <p className="section-sub">Tell us about your home repair or improvement project in Dublin. We&apos;ll follow up promptly with clear options and pricing.</p>
            </div>
            <div className="contact-grid">
              <form className="quote-form" onSubmit={submitQuote}>
                {sent && <div className="form-ok">Thank you! WhatsApp should have opened with your message ready to send to Julian — just press send.</div>}
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="q-name">Full Name</label>
                    <input id="q-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="q-phone">Phone Number</label>
                    <input id="q-phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="q-email">Email Address</label>
                    <input id="q-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="q-service">Primary Service Needed</label>
                    <select id="q-service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      {SERVICES.map((s) => (<option key={s.title}>{s.title}</option>))}
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="q-details">Project Details &amp; Preferred Schedule</label>
                  <textarea id="q-details" rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="Describe what needs fixing, or a specific timeline…" />
                </div>
                <button className="btn btn-amber" type="submit" style={{ width: "100%", justifyContent: "center" }}>Send My Request →</button>
              </form>
              <div className="contact-info">
                <div className="info-card">
                  <h3>Service Area</h3>
                  <p>Dublin, Ireland and the surrounding areas.</p>
                </div>
                <div className="info-card">
                  <h3>Direct Phone (Call or Text)</h3>
                  <a className="big" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </div>
                <div className="info-card">
                  <h3>WhatsApp</h3>
                  <p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ color: "var(--navy-2)", fontWeight: 700 }}>Chat with Julian on WhatsApp →</a></p>
                </div>
                <div className="info-card">
                  <h3>Facebook</h3>
                  <p><a href={FACEBOOK_URL} target="_blank" rel="noreferrer" style={{ color: "var(--navy-2)", fontWeight: 700 }}>Follow Express Handyman Dublin on Facebook →</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
