"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  CtaBand,
} from "../../components/site-chrome";

const FILTERS = ["All", "Bathrooms", "Kitchens", "Doors", "Bedrooms", "Carpentry", "Tiling & Paint", "Repairs"];

const ITEMS = [
  { img: "/images/bathroom-refurb-goatstown.webp", cat: "Bathrooms", title: "Bathroom Refurbishment", sub: "Goatstown" },
  { img: "/images/cabinets-foxrock.webp", cat: "Carpentry", title: "Cabinets", sub: "Foxrock" },
  { img: "/images/garden-door-harolds-cross.webp", cat: "Doors", title: "Garden Door", sub: "Harold's Cross" },
  { img: "/images/wallpaper-ranelagh.webp", cat: "Tiling & Paint", title: "Wallpaper Hanging", sub: "Ranelagh" },
  { img: "/images/shower-limerick.webp", cat: "Bathrooms", title: "Shower Replacement", sub: "Limerick" },
  { img: "/images/sink-leixlip.webp", cat: "Kitchens", title: "Sink Unit", sub: "Leixlip" },
  { img: "/images/kitchen-harolds-cross.webp", cat: "Kitchens", title: "Kitchen Renovation", sub: "Harold's Cross" },
  { img: "/images/entrance-door-sandyford.webp", cat: "Doors", title: "Entrance Door", sub: "Sandyford" },
  { img: "/images/bathroom-pipes-foxrock.webp", cat: "Bathrooms", title: "Bathroom Boxed Pipes", sub: "Foxrock" },
  { img: "/images/shower-swords.webp", cat: "Bathrooms", title: "Shower Renovation", sub: "Swords" },
  { img: "/images/bedroom-ballsbridge.webp", cat: "Bedrooms", title: "Bedroom Renovation", sub: "Ballsbridge" },
  { img: "/images/rooftop-dun-laoghaire.webp", cat: "Repairs", title: "Rooftop Renovation", sub: "Dun Laoghaire" },
  { img: "/images/entrance-door-dublin.jpg", cat: "Doors", title: "Wooden Entrance Door Renovation", sub: "Dublin" },
  { img: "/images/mixer-tap-cabinteely.jpg", cat: "Bathrooms", title: "Bath Shower Mixer Tap", sub: "Cabinteely" },
  { img: "/images/bathroom-tiling-dublin1.jpg", cat: "Tiling & Paint", title: "Bathroom Tiling", sub: "Dublin 1" },
  { img: "/images/bedroom-sandycove.jpg", cat: "Bedrooms", title: "Bedroom Renovation", sub: "Sandycove" },
  { img: "/images/immersion-blackrock.webp", cat: "Repairs", title: "Double Immersion Water Heater Replacement", sub: "Blackrock" },
  { img: "/images/electrical-dublin1.jpg", cat: "Repairs", title: "Electrical Installation Replacement", sub: "Dublin 1" },
];

const SHOWCASE = [
  {
    title: "Bathroom Refurbishment, Goatstown",
    area: "Goatstown, Dublin",
    time: "Recent project",
    desc: "Full bathroom refurbishment completed in Goatstown — new tiling, fixtures and finishes, done to a high standard.",
    badge: "Finished to a high standard",
  },
  {
    title: "Kitchen Renovation, Harold's Cross",
    area: "Harold's Cross, Dublin",
    time: "Recent project",
    desc: "Kitchen renovation completed in Harold's Cross — units, tiling and finishing by Julian.",
    badge: "Finished to a high standard",
  },
  {
    title: "Bedroom Renovation, Ballsbridge",
    area: "Ballsbridge, Dublin",
    time: "Recent project",
    desc: "Bedroom renovation completed in Ballsbridge — painting, carpentry and finishing.",
    badge: "Finished to a high standard",
  },
];

const STANDARDS = [
  { title: "Punctual & Professional", desc: "A proven record of high-quality work. Always aiming to be on time, with projects completed to the highest possible standard." },
  { title: "Honest & Dependable", desc: "Honesty is the only policy — every project completed with integrity and fairness." },
  { title: "Passionate & Always Improving", desc: "The best tools and technology, with attention to detail, so every job is done quickly and correctly." },
  { title: "No Job Too Small", desc: "From a single tap to a full renovation — no project is too large or small." },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Recent Projects"
          title="Recent Projects"
          sub="Real jobs in real Dublin homes — take a look at my recent work."
        />

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Recent work</span>
              <h2>Featured projects</h2>
              <p>Clean trade execution, seamless architectural blends, and meticulous substrate leveling.</p>
            </div>
            <div className="cards-3">
              {SHOWCASE.map((s) => (
                <article key={s.title} className="card">
                  <span className="card-tag">{s.area} · {s.time}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <p className="card-note">✓ {s.badge}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Recent Commissions Across the Dublin area</span>
              <h2>Project archive</h2>
              <p>Filter through my completed work across Dublin.</p>
            </div>
            <div className="filters">
              {FILTERS.map((f) => (
                <button key={f} className={filter === f ? "filter-btn active" : "filter-btn"} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
            <p className="filter-count">
              Showing {shown.length} {shown.length === 1 ? "work" : "works"}
            </p>
            <div className="portfolio-grid">
              {shown.map((w) => (
                <article key={w.img} className="work-card">
                  <Image src={w.img} alt={w.title} width={800} height={500} />
                  <div className="work-body">
                    <span className="work-cat">{w.cat}</span>
                    <h3>{w.title}</h3>
                    <p>{w.sub}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Zero-Cutting-Corners Protocol</span>
              <h2>The Dublin trade standard</h2>
              <p>Every repair, trim cut, and fastener we place complies with our residential assurance framework.</p>
            </div>
            <div className="cards-3">
              {STANDARDS.map((s) => (
                <article key={s.title} className="card">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Have a project in mind? Let's build something built to last."
          sub="Send photos of your repair or describe your custom carpentry concept. You will receive an upfront, itemized proposal within 24 hours. No hidden trip fees."
        />
      </main>
      <SiteFooter />
    </>
  );
}
