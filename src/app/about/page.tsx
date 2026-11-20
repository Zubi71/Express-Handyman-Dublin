import Image from "next/image";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  CtaBand,
} from "../../components/site-chrome";

export const metadata = {
  title: "About Us | Express Handyman Dublin — Dublin, Ireland",
  description:
    "Built on reliability, craftsmanship, and Dublin trust. Meet the crew, our four pillars, and the standards behind every repair.",
};

const PILLARS = [
  {
    n: "Pillar 01",
    title: "Punctuality & Respect",
    desc: "Your calendar matters. We notify you when our van departs, arrive inside our guaranteed arrival slot, and treat family spaces with quiet professionalism.",
    note: "Call or WhatsApp to book",
  },
  {
    n: "Pillar 02",
    title: "Upfront Transparent Pricing",
    desc: "No hidden travel fees, no phantom hourly inflations, and no invoice surprises. All tasks receive an explicit, itemized scope before tools touch walls.",
    note: "Locked estimates prior to work",
  },
  {
    n: "Pillar 03",
    title: "True Craftsmanship",
    desc: "We never take shortcuts behind drywall or under subfloors. Mortised joints, plumb framing, tight electrical terminations, and architectural precision.",
    note: "Quality workmanship, every job",
  },
  {
    n: "Pillar 04",
    title: "Clean Worksite Guarantee",
    desc: "Shoe coverings, floor runners, HEPA-filtered vacuum extraction, and meticulous debris removal ensure your home stays spotless after we depart.",
    note: "\u201CCleaner than we found it\u201D rule",
  },
];

const CRAFTS = [
  {
    title: "Finish Carpentry & Millwork",
    desc: "Custom wainscoting, pocket door alignment, trim replication, and structural subfloor repairs throughout Dublin homes.",
    tags: ["Cabinetry", "Door Hangs", "Historic Trim"],
  },
  {
    title: "Electrical & Plumbing",
    desc: "Electrical sub-panel maintenance, whole-home circuit updates, water fixture installations, tankless water heater diagnostics, and smart home lighting integrations.",
    tags: ["Breaker Panels", "Fixture Updates", "Leak Isolation"],
  },
  {
    title: "Tiling & Restoration",
    desc: "Expert tiling, re-grouting and splashbacks, plus seamless repairs and accurate paint-matching across challenging interior spaces.",
    tags: ["Re-grouting", "Splashbacks", "Surface Prep"],
  },
];

const TESTIMONIALS = [
  {
    text: "I have nothing but great things to say about our new handyman — he has done 6 jobs for us so far, from replacing a tap to fixing our pull-out larder. He is polite, reliable, extremely hard working and very professional.",
    name: "Mide Stevens",
    area: "Dublin",
  },
  {
    text: "Called over quickly, had a backup part, job done no problem. That guy knows his job — we'll call him again!",
    name: "Valerie O'Connor",
    area: "Dublin",
  },
  {
    text: "I was very impressed with Julian. Did all the jobs required and v. good price. Will definitely recommend him.",
    name: "Antoinette Treacy",
    area: "Dublin",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Dublin's Trusted Handyman"
          title="Built on Reliability, Craftsmanship, and Dublin Trust."
          sub="Serving homeowners across Dublin and the surrounding areas who value straight talk, prompt arrivals, and work done right the first time."
        />

        <section className="section">
          <div className="container about-split">
            <div className="about-img">
              <Image src="/images/hero-handyman.jpg" alt="Handyman at work in a Dublin home" width={900} height={650} />
            </div>
            <div>
              <span className="eyebrow">Our Founding Principle</span>
              <h2>Why &apos;Express&apos;?</h2>
              <p>
                Hi, my name is Julian and I&apos;m your Express Handyman! No matter your needs, I&apos;m only a phone call away and can assist you with almost any task — carpentry, plumbing, tiling, painting and more. No job too small.
              </p>
              <p>
                I only offer high-quality finishes on all my jobs, and I treat every home with the same care I&apos;d bring to my own.
              </p>
              <p className="quote-line">&ldquo;No matter your needs, I&apos;m only a phone call away.&rdquo;</p>
              <ul className="check-list">
                <li>Arrival Precision — exact 1-hour window</li>
                <li>Pricing Clarity — written upfront</li>
                <li>Real reviews from happy Dublin clients</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">The Four Pillars</span>
              <h2>The non-negotiable standards of our crew</h2>
              <p>Every technician dispatched to your home adheres strictly to four operational doctrines.</p>
            </div>
            <div className="cards-3">
              {PILLARS.map((p) => (
                <article key={p.n} className="card">
                  <span className="card-tag">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <p className="card-note">✓ {p.note}</p>
                </article>
              ))}
              <article className="card">
                <span className="card-tag">Our Promise</span>
                <h3>Free estimates, always</h3>
                <p>
                  We arrive on time, protect your hardwood floors with heavy canvas drops, quote an honest flat rate
                  before turning a screw, and vacuum every wood shaving before we shake your hand.
                </p>
                <p className="card-note">✓ No obligation, ever</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">The Craftsmen In Your Home</span>
              <h2>Experienced masters, never subcontracted</h2>
              <p>We do not farm your projects out to nameless third parties. Meet the dedicated career tradesmen who uphold our name.</p>
            </div>
            <div className="cards-3">
              {CRAFTS.map((c) => (
                <article key={c.title} className="card">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="tag-row">
                    {c.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Our Regional Roots</span>
              <h2>Proudly anchored in the Dublin community</h2>
              <p>
                We are not an out-of-state franchise or an anonymous app algorithm. We are Dublin residents who
                shop local, support youth leagues, and volunteer trade hours to assist elderly homeowners in the Dublin area.
              </p>
            </div>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-num">Real Reviews</span>
                <span className="stat-label">From happy Dublin homeowners</span>
              </div>
              <div className="stat">
                <span className="stat-num">9</span>
                <span className="stat-label">Service categories</span>
              </div>
              <div className="stat">
                <span className="stat-num">Free</span>
                <span className="stat-label">Estimates, no obligation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What Dublin homeowners say</span>
              <h2>Trusted by our neighbors</h2>
            </div>
            <div className="testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="testimonial-card">
                  <span className="stars">★★★★★</span>
                  <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.area}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Experience stress-free home repairs today"
          sub="Stop putting off home maintenance. Get a precise, zero-obligation estimate from Dublin's most dependable handyman team."
        />
      </main>
      <SiteFooter />
    </>
  );
}
