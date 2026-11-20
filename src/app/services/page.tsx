import Image from "next/image";
import Link from "next/link";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  CtaBand,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../../components/site-chrome";

export const metadata = {
  title: "Services | Express Handyman Dublin — Dublin, Ireland",
  description:
    "Handyman, carpenter, electrician, plumber, painter and tiler — one local handyman with over 15 years of experience in Dublin, Ireland. Free estimates.",
};

const SERVICES = [
  {
    id: "handyman",
    cat: "Handyman",
    title: "Handyman — Home Upgrades & Odd Jobs",
    desc: "From door repairs and squeaky flooring to TV wall installations and damp sealing, let me be your local handyman. I undertake all work, and no project is too large or small.",
    img: "/images/trade-handyman.jpg",
    alt: "Julian at work on a home repair job",
    points: ["Home upgrades", "Gutter cleaning", "Pressure washing", "General garden maintenance", "Door hardware installation", "Appliance installation", "Furniture assembly"],
    time: "Free estimate",
    price: "Competitive prices",
  },
  {
    id: "carpenter",
    cat: "Carpenter",
    title: "Carpenter — Floors, Doors & Kitchen Units",
    desc: "My carpentry services include (but are not limited to) lock adjusting, door panel repairs, skirting board installation, sash window repairs and more. I can help with all types of properties, from new builds to period homes.",
    img: "/images/trade-carpenter.jpg",
    alt: "Carpentry work by Julian",
    points: ["Floors", "Doors", "Garden sheds", "Decking", "Fences", "Shelves", "Kitchen units"],
    time: "Free estimate",
    price: "Competitive prices",
  },
  {
    id: "electrician",
    cat: "Electrician",
    title: "Electrician — Lights, Sockets & Showers",
    desc: "Whether you’d like me to install a new light fixture or fix an outdoor plug socket, I’ve been working as an electrician for over fifteen years. I’ve seen and done a lot, so you can rest assured that you’ve found the right guy for the job.",
    img: "/images/trade-electrician.jpg",
    alt: "Electrical work by Julian",
    points: ["Switches, sockets and transfers installation", "Light fixture repair and replacement", "Preparing new light points", "Outdoor and garden lights", "Immersion heater elements", "Electric showers"],
    time: "Free estimate",
    price: "Competitive prices",
  },
  {
    id: "plumber",
    cat: "Plumber",
    title: "Plumber — Taps, Toilets & Bathrooms",
    desc: "With my plumbing services, I can help with a range of projects, including kitchen tap replacement, washing machine repairs and replacement, shower tray sealing, and leak repairs. No project is too intricate, so please get in touch to discuss your ideas.",
    img: "/images/trade-plumber.jpg",
    alt: "Plumbing work by Julian",
    points: ["Sinks and basins fitting and replacement", "Drain unblocking", "Toilet repair and installation", "Leaks fixing", "Plumbing repairs and installation", "Complete bathroom refurbishment"],
    time: "Free estimate",
    price: "Competitive prices",
  },
  {
    id: "painter",
    cat: "Painter",
    title: "Painter — Inside & Outside Painting",
    desc: "Looking to redecorate? I can help to seamlessly repaint any room in your home. Whether you’re looking for a fresh lick of white paint or something more upbeat and colourful, let me help you effectively change your room in no time at all.",
    img: "/images/trade-painter.jpg",
    alt: "Painting work by Julian",
    points: ["Inside and outside painting", "Doors and windows painting", "Kitchen units", "Fences and sheds", "Wood staining and finishing"],
    time: "Free estimate",
    price: "Competitive prices",
  },
  {
    id: "tiler",
    cat: "Tiler",
    title: "Tiler — Kitchens, Bathrooms & Mosaics",
    desc: "I can happily lay both floor and wall tiling and can provide the correct materials in order to do so. I can also assist you in choosing the correct tiles for your needs, simply get in touch for more information.",
    img: "/images/trade-tiler.jpg",
    alt: "Tiling work by Julian",
    points: ["Kitchen and bathrooms tiling", "Showers grouting repair", "Wall tiling", "Floor tiling", "Mosaic tiles laying", "Filling of gaps, cracks and holes in floors and walls"],
    time: "Free estimate",
    price: "Competitive prices",
  },
];

const PRICING = [
  {
    title: "Free Quotes",
    sub: "Call Julian on 087 122 3254 or fill in the contact form for a free quote.",
    points: ["No obligation to proceed", "Firm quote before work starts", "Free estimate via phone photos"],
    note: "Estimates are 100% complimentary.",
  },
  {
    title: "Competitive Prices",
    sub: "I’ll never overcharge you for a project, and I always aim to keep my prices competitive.",
    points: ["Honest, upfront pricing", "No hidden charges", "Best deal on the market"],
    note: "Integrity and fairness — with clients, suppliers and subcontractors.",
  },
  {
    title: "No Job Too Small",
    sub: "From a single tap to a full bathroom refurbishment — no project is too large or small.",
    points: ["Small repairs welcome", "Large projects welcome", "One call covers six trades"],
    note: "If it needs fixing, call Julian.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Dublin & Surrounding Areas Field Directory • Dublin, Ireland"
          title="Comprehensive Home Repairs & Maintenance Services"
          sub="One local handyman for all residential trade projects — carpentry, plumbing, tiling, painting and electrical, delivered with competitive prices."
        />

        <section className="stats-band">
          <div className="container stats-grid">
            <div className="stat">
              <span className="stat-num">Real Reviews</span>
              <span className="stat-label">From happy Dublin homeowners</span>
            </div>
            <div className="stat">
              <span className="stat-num">6</span>
              <span className="stat-label">Trades covered</span>
            </div>
            <div className="stat">
              <span className="stat-num">Free</span>
              <span className="stat-label">Estimates — no obligation</span>
            </div>
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Years of experience</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Standard Trade &amp; Repair Capabilities</span>
              <h2>Every project, handled by an experienced, tool-prepared handyman</h2>
              <p>No rushed subcontractors, no lingering messes, and clean daily wrap-ups.</p>
            </div>
            <div className="detail-grid">
              {SERVICES.map((s) => (
                <article key={s.id} className="detail-card" id={s.id}>
                  <div className="detail-img">
                    <Image src={s.img} alt={s.alt} width={800} height={450} />
                  </div>
                  <div className="detail-body">
                    <span className="eyebrow">{s.cat}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className="check-list">
                      {s.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <div className="detail-meta">
                      <span>{s.time}</span>
                      <span>{s.price}</span>
                    </div>
                    <Link className="btn btn-navy" href="/contact">
                      Request this service →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">No Guesswork • Honest Accounting</span>
              <h2>Transparent pricing philosophy</h2>
              <p>You receive a firm, written quote prior to any work starting.</p>
            </div>
            <div className="cards-3">
              {PRICING.map((p) => (
                <article key={p.title} className="card">
                  <h3>{p.title}</h3>
                  <p>{p.sub}</p>
                  <ul className="check-list">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <p className="card-note">{p.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Uncertain about your repair scope?</span>
              <h2>Schedule an on-site consultation</h2>
              <p>
                Have a custom idea or multiple repairs throughout your Dublin home? Julian will walk through your home and draft a plan with you.
              </p>
            </div>
            <div className="hero-actions center">
              <a className="btn btn-amber" href="/contact">
                Book an In-Home Walkthrough →
              </a>
              <a className="btn btn-outline" href={PHONE_HREF}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <CtaBand
          title="Experience stress-free home repairs today"
          sub="Stop putting off home maintenance. Get a free, zero-obligation estimate from Dublin's dependable handyman."
        />
      </main>
      <SiteFooter />
    </>
  );
}
