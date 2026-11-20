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
    title: "Punctual & Professional",
    desc: "I have a proven record of high-quality accomplishments and I pride myself on my professionalism. I always aim to be on time for my customers and ensure that their projects are completed to the highest possible standard.",
    note: "On time, every time",
  },
  {
    n: "Pillar 02",
    title: "Honest & Dependable",
    desc: "For me, honesty is the only policy and I strive to complete all projects with integrity and fairness, not just with my clients, but also with my suppliers and subcontractors.",
    note: "Honesty is the only policy",
  },
  {
    n: "Pillar 03",
    title: "Passionate & Always Improving",
    desc: "I also strive to constantly improve my work. I use the best of technology and tools to ensure that all jobs are done quickly, but also give attention to detail and ensure everything is done correctly.",
    note: "Done quickly — and done correctly",
  },
];

const CRAFTS = [
  {
    title: "Carpentry & Joinery",
    desc: "Floors, doors, garden sheds, decking, fences, shelves and kitchen units — for new builds and period homes alike.",
    tags: ["Doors", "Shelves", "Kitchen Units"],
  },
  {
    title: "Electrical & Plumbing",
    desc: "Light fixtures, sockets, immersion heaters and electric showers — plus sinks, toilets, drains and complete bathroom refurbishments.",
    tags: ["Light Fixtures", "Leak Repairs", "Bathrooms"],
  },
  {
    title: "Tiling & Painting",
    desc: "Kitchen and bathroom tiling, grouting repair, mosaic laying — and seamless inside and outside painting.",
    tags: ["Wall Tiling", "Grouting", "Painting"],
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
              <Image src="/images/julian-ceiling-painting.jpg" alt="Julian painting a ceiling" width={900} height={650} />
            </div>
            <div>
              <span className="eyebrow">Our Founding Principle</span>
              <h2>Meet Julian — Your Express Handyman</h2>
              <p>
                Hi, my name is Julian and I&apos;m your Express Handyman! I can be contacted for small and large jobs whenever you need me. I have over fifteen years of experience in my field, and my goal is to always see my customers happy and satisfied with their final product.
              </p>
              <p>
                Most of my qualifications come from working hard on building sites and learning on the job, having picked up many skills from advanced plumbers, electricians and more professionals. I&apos;ll never overcharge you for a project, and I always aim to keep my prices competitive.
              </p>
              <p className="quote-line">&ldquo;No matter your needs, I&apos;m only a phone call away.&rdquo;</p>
              <ul className="check-list">
                <li>15+ years of experience</li>
                <li>Competitive prices — never overcharged</li>
                <li>Real reviews from happy Dublin clients</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">How I Work</span>
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
                <span className="stat-num">6</span>
                <span className="stat-label">Trades covered</span>
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
