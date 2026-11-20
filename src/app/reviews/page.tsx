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
    text: "I have nothing but great things to say about our new handyman — he has done 6 jobs for us so far, from replacing a tap to taking apart and fixing our pull-out larder. He can do anything and whatever he does is done to a very high standard. He is polite, reliable, extremely hard working and very professional. It is great to know I can call him when electrics, plumbing, carpentry or gardening skills are needed. I honestly couldn't recommend him more highly.",
  },
  {
    name: "Carol Byrne",
    area: "Dublin",
    date: "Happy client",
    service: "General Home Repairs",
    text: "Absolutely fantastic! So quick, efficient and went above and beyond to do a good job. Cannot recommend enough! Called only the day before and he made it so easy and stress-free! Really fantastic! Highly recommend",
  },
  {
    name: "Antoinette Treacy",
    area: "Dublin",
    date: "Happy client",
    service: "General Home Repairs",
    text: "I was very impressed with Julian. Did all the jobs required and v. good price. Will definitely recommend him and will certainly get him to do any other jobs I may need. Thank you, Antoinette.",
  },
  {
    name: "Louise Dupuis",
    area: "Foxrock, Dublin",
    date: "Happy client",
    service: "Pocket Door, Painting & Table Restoration",
    text: "Julian's dedication to his work and clients is outstanding. He's done a few jobs around the house: pocket door repaired, walls painted, large table top sanded and finished with polyurethane. Julian protects the working area very well and leaves no mess when he is finished. I recommend Julian to all my friends now as it's tough to find a good and reliable handyman in Dublin.",
  },
  {
    name: "Matin Wafa",
    area: "Dublin",
    date: "Happy client",
    service: "General Home Repairs",
    text: "Julian did a very good job for me. He has a great personality too. I will recommend him and his work to anyone.",
  },
  {
    name: "Mairead O'Sullivan",
    area: "Dublin",
    date: "Happy client",
    service: "Gate Hanging",
    text: "Julian did great work hanging gates for me today. He was both very courteous and very efficient. I contacted him based on reviews, and he was true to form. I will be passing on his details to family and friends. Thank you once again, Julian.",
  },
  {
    name: "Ciara Smyth",
    area: "Dublin",
    date: "Happy client",
    service: "Painting, Decorating & Carpentry",
    text: "Highly recommend Julian to anyone looking for an outstanding painter, decorator, carpenter etc. He is incredibly reliable, high quality, communicative and dependable. He’s also a super guy and hard-working.",
  },
  {
    name: "Claire O’Hanlon",
    area: "Dublin",
    date: "Happy client",
    service: "Showers, Appliances & Wall Mounting",
    text: "I enlist Julian’s help whenever I need anything done around the house. Blocked showers, broken washing machines, dishwashers and door knobs, pictures, shelves, mirrors, and televisions that need hanging, blinds put up, etc. You name it, he does it. His work is of a very high standard, and I don’t say that lightly. I have been getting Julien as a handyman for four years now. I text him, and he’s over promptly. No job is too big, and I am genuinely delighted I eventually found someone as professional and reliable as he is at all these jobs. He’s a perfectionist when it comes to mirrors and shelves.",
  },
  {
    name: "Jennifer Byrne",
    area: "Dublin",
    date: "Happy client",
    service: "General Home Repairs",
    text: "The Express Handyman is 2nd to none. Quality of the work is top notch, and no job is too big or small. I will be a lifelong customer for sure.! Thank you so much, Julian and Felix!",
  },
  {
    name: "Valerie O'Connor",
    area: "Dublin",
    date: "Happy client",
    service: "Plumbing Repair",
    text: "Called over quickly, had a backup part (to replace the new one we had bought and didn't fit), job done no problem. That guy knows his job — we'll call him again!",
  },
  {
    name: "Patricia Mortell",
    area: "Dublin",
    date: "Happy client",
    service: "General Home Repairs",
    text: "Julian was extremely professional and his work was outstanding. Would highly recommend him. Lovely person to deal with. I will be using his services in the future.",
  },
];

const BACKED = [
  { img: "/images/bathroom-refurb-goatstown.webp", title: "Bathroom Refurbishment", area: "Goatstown" },
  { img: "/images/kitchen-harolds-cross.webp", title: "Kitchen Renovation", area: "Harold's Cross" },
  { img: "/images/cabinets-foxrock.webp", title: "Cabinets", area: "Foxrock" },
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
              <p>Real reviews from Julian&apos;s clients — in their own words.</p>
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
                    <p>Recent project</p>
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
                      <option>Handyman</option>
                      <option>Carpenter</option>
                      <option>Electrician</option>
                      <option>Plumber</option>
                      <option>Painter</option>
                      <option>Tiler</option>
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
          title="Ready to get your jobs done?"
          sub="Call Julian on 087 122 3254 or send your project list on WhatsApp for a free quote."
        />
      </main>
      <SiteFooter />
    </>
  );
}
