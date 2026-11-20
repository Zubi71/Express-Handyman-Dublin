"use client";

import { useState } from "react";
import Image from "next/image";

export const PHONE_DISPLAY = "087 122 3254";
export const WHATSAPP_URL = "https://wa.me/353871223254";
export const FACEBOOK_URL = "https://www.facebook.com/expresshandymandublin.ie";
export const PHONE_HREF = "tel:+353871223254";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            Serving <strong>Dublin</strong> &amp; surrounding areas · 24h emergency call-outs on weekends &amp; bank holidays
          </span>
          <span>
            Call or text: <strong>{PHONE_DISPLAY}</strong>
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/">
            <Image src="/images/logo-real.png" alt="Express Handyman Dublin logo" width={48} height={48} style={{ background: "#00162e", borderRadius: 12, padding: 4 }} />
            <span>
              Express Handyman<small>Dublin</small>
            </span>
          </a>
          <nav className="main-nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-amber header-cta" href="/contact">
            Get a Free Estimate
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            ☰
          </button>
        </div>
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Get a Free Estimate →
          </a>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="/" style={{ color: "#fff" }}>
              <Image src="/images/logo-real.png" alt="Express Handyman Dublin logo" width={48} height={48} style={{ background: "#00162e", borderRadius: 12, padding: 4 }} />
              <span style={{ color: "#fff" }}>
                Express Handyman<small style={{ color: "#94a3b8" }}>Dublin</small>
              </span>
            </a>
            <p>
              Dublin&apos;s residential repairs, custom carpentry, and prompt maintenance team. No job too small — honest rates and quality workmanship.
            </p>
          </div>
          <div>
            <h4>Quick Navigation</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Popular Services</h4>
            <ul>
              <li>Handyman — Home Upgrades &amp; Odd Jobs</li>
              <li>Carpentry — Floors, Doors &amp; Kitchen Units</li>
              <li>Electrician — Lights, Sockets &amp; Showers</li>
              <li>Plumber — Taps, Toilets &amp; Bathrooms</li>
              <li>Painter — Inside &amp; Outside Painting</li>
              <li>Tiler — Kitchens, Bathrooms &amp; Mosaics</li>
            </ul>
          </div>
          <div>
            <h4>Clondalkin, Dublin 22</h4>
            <ul>
              <li>Serving Dublin &amp; surrounding areas</li>
              <li>
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp Julian</a>
              </li>
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Follow on Facebook</a>
              </li>
              <li>Mon–Fri 8am–6pm · Weekends &amp; bank holidays: 24h emergency call-outs</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Express Handyman Dublin Handyman Services LLC. All rights reserved.</span>
          <span>
            <a href="/contact">Instant Quote</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{sub}</p>
        <div className="hero-actions">
          <a className="btn btn-amber" href="/contact">
            Get a Free Estimate →
          </a>
          <a className="btn btn-outline" href={PHONE_HREF}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="cta-band">
      <div className="container">
        <span className="eyebrow light">Ready when you are</span>
        <h2>{title}</h2>
        <p>{sub}</p>
        <a className="btn btn-amber" href="/contact">
          Request Your Free Estimate →
        </a>
        <p className="cta-note">No obligation · Quick response · Free quotes</p>
      </div>
    </section>
  );
}

export function MobileCtaBar() {
  return (
    <div className="mobile-cta" role="navigation" aria-label="Quick contact">
      <a className="cta-call" href={PHONE_HREF}>
        Contact Us
      </a>
      <a className="cta-wa" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
