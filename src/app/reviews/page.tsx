"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SiteHeader,
  SiteFooter,
  PageHero,
  CtaBand,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../../components/site-chrome";

const REVIEWS = [
  {
    name: "Mide Stevens",
    area: "Dublin",
    date: "Happy client",
    service: "Tap Replacement & Larder Repair",
    text: "I have nothing but great things to say about our new handyman — he has done 6 jobs for us so far, from replacing a tap to taking apart and fixing our pull-out larder. He can do anything and whatever he does is done to a very high standard. He is polite, reliable, extremely hard working and very professional. I honestly couldn't recommend him more highly.",
    reply: "Thanks so much, Mide — happy to help anytime! — Julian",
  },
  {
    name: "Valerie O'Connor",
    area: "Dublin",
    date: "Happy client",
    service: "Plumbing Repair",
    text: "Called over quickly, had a backup part (to replace the new one we had bought and didn't fit), job done no problem. That guy knows his job — we'll call him again!",
    reply: "Thanks Valerie — glad it was a quick fix! — Julian",
  },
  {
    name: "Antoinette Treacy",
    area: "Dublin",
    date: "Happy client",
    service: "General Home Repairs",
    text: "I was very impressed with Julian. Did all the jobs required and v. good price. Will definitely recommend him and will certainly get him to do any other jobs I may need. Thank you, Antoinette.",
    reply: "Thank you, Antoinette — any time you need me, just call! — Julian",
  },
];

const BACKED = [
  { img: "/images/rev-bookshelves.jpg", title: "Custom White Oak Built-In Library", area: "Clondalkin Historic District" },
  { img: "/images/rev-ceiling.jpg", title: "Seamless Ceiling Restoration & Texture Blend", area: "Rathfarnham Estates" },
  { img: "/images/rev-deck.jpg", title: "Structural Cedar Staircase Rebuild", area: "Lucan Country Home" },
];

export default function ReviewsPage() {
  const [sent, setSent] = useState(false);
  const [rating, setRating] = useState(5);
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Real Client Reviews"
          title="Trusted by Dublin Homeowners"
          sub="Real experiences from happy Dublin homeowners — every review below is from Julian's own clients."
        />

        <section className="stats-band">
          <div className="container stats-grid">
            <div className="stat">
              <span className="stat-num">Real Reviews</span>
              <span className="stat-label">From happy Dublin homeowners</span>
            </div>
            <div className="stat">
              <span className="stat-num">★ ★ ★ ★ ★</span>
              <span className="stat-label">Quality workmanship, every job</span>
            </div>
            <div className="stat">
              <span className="stat-num">No Job Too Small</span>
              <span className="stat-label">Big or small, every job welcome</span>
            </div>
            <div className="stat">
              <span className="stat-num">Clondalkin, Dublin 22</span>
              <span className="stat-label">Serving Dublin &amp; surrounding areas</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What Dublin homeowners say</span>
              <h2>Verified client reviews</h2>
              <p>Real reviews from Julian&apos;s clients, with a reply from Julian on each one.</p>
            </div>
            <div className="review-grid">
              {REVIEWS.map((r) => (
                <article key={r.name} className="review-card">
                  <div className="review-head">
                    <span className="review-avatar">{r.name.charAt(0)}</span>
                    <div>
                      <strong>{r.name}</strong>
                      <span className="review-area">{r.area} · {r.date}</span>
                    </div>
                    <span className="stars">★★★★★</span>
                  </div>
                  <span className="work-cat">{r.service}</span>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <div className="owner-reply">
                    <strong>Owner response</strong>
                    <p>&ldquo;{r.reply}&rdquo;</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Before &amp; After Authenticity</span>
              <h2>Recent work backed by reviews</h2>
            </div>
            <div className="portfolio-grid">
              {BACKED.map((b) => (
                <article key={b.img} className="work-card">
                  <Image src={b.img} alt={b.title} width={800} height={500} />
                  <div className="work-body">
                    <span className="work-cat">{b.area}</span>
                    <h3>{b.title}</h3>
                    <p>Verified project</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Past homeowner experience</span>
              <h2>Had work done recently? Share your experience.</h2>
              <p>We rely on word of mouth from Dublin neighbors. Your review is read directly by our team.</p>
            </div>
            <div className="form-wrap narrow">
              {sent ? (
                <div className="form-success">
                  <strong>✓ Thank you!</strong>
                  <p>Your review has been sent. Thank you for sharing your experience.</p>
                </div>
              ) : (
                <form
                  className="quote-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const body = encodeURIComponent(
                      `Name: ${data.get("name")}\nNeighborhood: ${data.get("area")}\nProject: ${data.get("project")}\nRating: ${rating} / 5\n\n${data.get("feedback")}`
                    );
                    window.open(`https://wa.me/353871223254?text=${encodeURIComponent("Hi Julian, I would like to leave a review.\n\n" + decodeURIComponent(body))}`, "_blank");
                    setSent(true);
                  }}
                >
                  <label>
                    Your Full Name
                    <input name="name" required placeholder="Your name" />
                  </label>
                  <label>
                    Neighborhood / Town
                    <input name="area" required placeholder="e.g. Clondalkin" />
                  </label>
                  <label>
                    Project Category
                    <select name="project">
                      <option>Architectural Trim &amp; Carpentry</option>
                      <option>Tiling &amp; Interior Painting</option>
                      <option>Plumbing &amp; Leak Repair</option>
                      <option>Exterior Doors &amp; Decking</option>
                      <option>General Handyman Tasks</option>
                    </select>
                  </label>
                  <label>
                    Overall Rating
                    <span className="star-picker">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button type="button" key={n} className={rating >= n ? "star on" : "star"} onClick={() => setRating(n)} aria-label={`${n} stars`}>
                          ★
                        </button>
                      ))}
                      <span>{rating}.0 Star Experience</span>
                    </span>
                  </label>
                  <label>
                    Project Feedback &amp; Scope Summary
                    <textarea name="feedback" rows={4} required placeholder="Tell us how the work went…" />
                  </label>
                  <button className="btn btn-amber" type="submit">
                    Submit Client Review →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <CtaBand
          title="Ready to experience 5-star handyman service?"
          sub="Put Dublin's top-rated trade team to work. Send us your project list or emergency repair request today for a prompt, flat-rate quote."
        />
      </main>
      <SiteFooter />
    </>
  );
}
