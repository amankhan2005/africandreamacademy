import { motion } from "framer-motion";
import { useState } from "react";

const P = {
  crimson:  "#8B1A1A",
  crimsonD: "#6B1212",
  amber:    "#E8920A",
  gold:     "#F0B429",
  ink:      "#1A0A00",
  warmWhite:"#FFFBF5",
};

const FONT = "'Inter', system-ui, sans-serif";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

const timelineEvents = [
  {
    year: "April 2012",
    title: "The Lease & Transformation",
    body: "ADA leased a one-story building on RIA Highway, Monrovia — approximately half an hour south of central Monrovia in Paynesville. Founder Reverend Enders, school staff, and a legion of volunteers transformed it into a newly painted and gated two-story facility.",
  },
  {
    year: "Sept 10, 2012",
    title: "Opening Day — 144 Students",
    body: "The school opened its doors to 144 eager students in classes from Nursery to Fourth Grade. Rev. Enders hired Mrs. Weata Korfeh from the American School of Monrovia as ADA's first Academic Director, establishing the curriculum, Morning Prayers, character education, Cultural Day, Beach Day, and intramural competitions.",
  },
  {
    year: "2014",
    title: "New Academic Director",
    body: "Mrs. Alice Reeves became the second Academic Director. With a Master's Degree in Education and experience in both the United States and Liberia, Mrs. Reeves continues to lead and guide the school through its various transitions.",
  },
  {
    year: "2012–2019",
    title: "Steady Growth",
    body: "Additional buildings were constructed year after year to accommodate new students as a new grade was added each consecutive year — growing from Nursery–Grade 4 all the way through Grade 10.",
  },
  {
    year: "June 2019",
    title: "A Campus ADA Owns",
    body: "After the June graduation, ADA purchased a nearby property to become its new permanent campus — a home it owns and can safely invest in for the future. In just four months, Executive Director Samuel Enders and his general contractor designed and built new classrooms, a library, a computer lab, a science lab, and administrative offices.",
  },
  {
    year: "Oct 28, 2019",
    title: "New Campus Opens",
    body: "Classes from Nursery through the new Eleventh Grade welcomed 629 returning students and a staff of 75. The campus now features running water, a paved courtyard, and a teachers' center — contributing significantly to the well-being and morale of students and staff alike.",
  },
  {
    year: "March 2020",
    title: "COVID-19 Closure",
    body: "On March 17, 2020, all Liberian schools were forced to close by government mandate to prevent the spread of COVID-19. Thanks to a quick and effective response, Liberia began gradually reopening schools in September 2020.",
  },
  {
    year: "2020–2021",
    title: "First 12th Grade Class",
    body: "The 2020–21 school year marked ADA's first year with a Twelfth Grade class — a landmark moment in the school's journey toward full K–12 education.",
  },
  {
    year: "January 2021",
    title: "Second Campus Opens",
    body: "A second property — located within 20 minutes of the main campus — was purchased, converted, and opened as ADA's new upper school, welcoming students in Grades 7 through 12.",
  },
  {
    year: "March 12, 2022",
    title: "First High School Graduation",
    body: "A huge milestone: ADA graduated its first high school class — 16 Twelfth Graders who passed their national examinations and entered universities in fall 2022. The second class had 36 graduates; the third, 144. ADA graduates are now earning bachelor's degrees across various fields.",
  },
  {
    year: "Present",
    title: "1,500 Students & Growing",
    body: "Current enrollment stands at 1,500 students supported by a staff of 149 — teachers, administrators, and support staff. The ADA Technical Institute (ADA-TI), ADA's vocational school, held its fifth graduation, graduating 350 women and men in seven disciplines, empowering families across Monrovia.",
  },
];

const newCampusImages = [
  { src: "/images/history/new/library.webp",     caption: "New library — larger space, more bookshelves" },
  { src: "/images/history/new/veranda.webp",      caption: "Students on the veranda, new campus" },
  { src: "/images/history/new/elem-campus.webp",  caption: "Elementary campus, 2019–present" },
  { src: "/images/history/new/science-lab.webp",  caption: "Science laboratory" },
  { src: "/images/history/new/img-8367.webp",     caption: "Campus life, new campus" },
  { src: "/images/history/new/img-7856.webp",     caption: "Students at the new campus" },
];

const oldCampusImages = [
  { src: "/images/history/old/transformation1.webp",  caption: "Before renovation — original building" },
  { src: "/images/history/old/transformation2.webp",  caption: "During transformation, 2012" },
  { src: "/images/history/old/transformation11.webp", caption: "After renovation — first campus" },
  { src: "/images/history/old/img-1172.webp",         caption: "Early students, first campus" },
  { src: "/images/history/old/large-gathering.webp",  caption: "Large gathering, first campus" },
];

export default function History() {
  const [activeImg, setActiveImg] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        /* ── Hero ── */
        .hist-hero-inner { padding: 120px 2rem 96px; }

        /* ── Hero stats: wrapping flex on all screens ── */
        .hist-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .hist-stat-pill {
          padding: 12px 20px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-top: 2px solid #F0B429;
          border-radius: 2px;
          text-align: center;
          min-width: 100px;
          flex: 1 1 auto;
          max-width: 160px;
        }

        /* ── Desktop timeline: alternating two-column ── */
        .hist-tl-entry {
          display: grid;
          grid-template-columns: 1fr 48px 1fr;
          gap: 0;
          margin-bottom: 8px;
        }
        .hist-tl-left  { padding: 0 32px 0 0; }
        .hist-tl-right { padding: 0 0 0 32px; }
        .hist-tl-center-line {
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 1px;
          background: rgba(139,26,26,0.12);
          transform: translateX(-50%);
        }

        /* ── Mobile timeline: single column with left rail ── */
        @media (max-width: 700px) {
          .hist-tl-entry {
            display: block;
            padding-left: 28px;
            position: relative;
            margin-bottom: 0;
          }
          .hist-tl-left, .hist-tl-right { padding: 0; text-align: left !important; }
          .hist-tl-dot-col { display: none !important; }
          .hist-tl-center-line { display: none; }
          .hist-tl-entry::before {
            content: '';
            position: absolute;
            left: 6px; top: 24px;
            width: 8px; height: 8px;
            border-radius: 50%;
            background: #E8920A;
            border: 2px solid #FFFBF5;
            box-shadow: 0 0 0 1px #E8920A;
            z-index: 1;
          }
        }

        /* ── Mobile rail line ── */
        .hist-tl-mobile-rail {
          display: none;
        }
        @media (max-width: 700px) {
          .hist-tl-mobile-rail {
            display: block;
            position: absolute;
            left: 9px; top: 0; bottom: 0;
            width: 1px;
            background: rgba(139,26,26,0.12);
          }
        }

        /* ── Galleries ── */
        .hist-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .hist-old-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        /* ── Closing stats ── */
        .hist-closing-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 32px;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .hist-gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .hist-old-grid     { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .hist-hero-inner   { padding: 80px 1.25rem 64px; }
        }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .hist-hero-inner   { padding: 64px 1rem 56px; }
          .hist-gallery-grid { grid-template-columns: 1fr; gap: 8px; }
          .hist-old-grid     { grid-template-columns: 1fr; gap: 8px; }
          .hist-stat-pill    { max-width: 140px; padding: 10px 14px; }
          .hist-closing-stats { gap: 20px; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden" }}>

        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(to right, ${P.gold}, ${P.amber}, ${P.crimsonD})`,
        }} />
        <div style={{
          position: "absolute", top: "-180px", right: "-180px",
          width: "520px", height: "520px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-120px", left: "-120px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div className="hist-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              2012 – Present
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.15, letterSpacing: "-0.025em", margin: "0 0 10px",
          }}>
            History of the{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              African Dream Academy
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.22 }}
            style={{
              transformOrigin: "center", height: "3px", width: "56px", borderRadius: "2px",
              background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
              margin: "22px auto 28px",
            }}
          />

          <motion.p {...fadeUp(0.28)} style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.85, maxWidth: "680px", margin: "0 auto 48px", fontWeight: 400,
          }}>
            In April 2012, Reverend Enders leased a single-story building in Paynesville,
            Monrovia. Alongside staff and volunteers, he transformed it into a school that
            would open on September 10, 2012 to 144 students — and grow into the institution
            of 1,500 children it is today.
          </motion.p>

          {/* Stats — wrapping flex so they reflow on mobile */}
          <motion.div {...fadeUp(0.38)} className="hist-stats">
            {[
              { v: "2012", l: "Founded" },
              { v: "144", l: "First students" },
              { v: "2019", l: "New campus" },
              { v: "2022", l: "First graduates" },
              { v: "1,500+", l: "Current enrollment" },
            ].map((s, i) => (
              <div key={i} className="hist-stat-pill">
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: P.gold, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginTop: "5px" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Our Journey
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              A Decade of{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Growth & Impact
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
                margin: "0 auto",
              }}
            />
          </motion.div>

          {/* Timeline entries */}
          <div style={{ position: "relative" }}>
            {/* Desktop center line */}
            <div className="hist-tl-center-line" />
            {/* Mobile left rail */}
            <div className="hist-tl-mobile-rail" />

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {timelineEvents.map((ev, i) => {
                const isLeft = i % 2 === 0;
                const accentColor = i % 3 === 0 ? P.crimson : i % 3 === 1 ? P.amber : P.gold;

                const card = (
                  <div style={{
                    background: "#fff",
                    border: `1px solid rgba(139,26,26,0.1)`,
                    borderLeft: `3px solid ${accentColor}`,
                    borderRadius: "2px",
                    padding: "20px 24px",
                    boxShadow: "0 2px 16px rgba(26,10,0,0.06)",
                    marginBottom: "16px",
                    textAlign: "left",
                  }}>
                    <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.amber, marginBottom: "6px" }}>{ev.year}</div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, color: P.ink, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{ev.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "rgba(26,10,0,0.58)", lineHeight: 1.8, margin: 0 }}>{ev.body}</p>
                  </div>
                );

                return (
                  <motion.div key={i} {...fadeUp(i * 0.06)} className="hist-tl-entry">

                    {/* Left slot (desktop only for even items) */}
                    <div className="hist-tl-left" style={{ textAlign: isLeft ? "right" : "left", minWidth: 0 }}>
                      {isLeft && card}
                    </div>

                    {/* Center dot (desktop only) */}
                    <div
                      className="hist-tl-dot-col"
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "24px" }}
                    >
                      <div style={{
                        width: "14px", height: "14px", borderRadius: "50%",
                        background: accentColor,
                        border: "3px solid white",
                        boxShadow: `0 0 0 1px ${accentColor}`,
                        flexShrink: 0, zIndex: 1,
                      }} />
                    </div>

                    {/* Right slot (desktop only for odd items) */}
                    <div className="hist-tl-right">
                      {!isLeft && card}
                    </div>

                    {/* Mobile: always render card (left/right already hidden on mobile via ::before dot) */}
                    {/* The card is already rendered above in left/right slots; on mobile those containers
                        lose their padding so both render, but only the correct one has content. */}
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NEW CAMPUS GALLERY
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>

        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                October 2019 – Present
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              The New{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                ADA Campus
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
                margin: "0 auto 20px",
              }}
            />
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
              On October 28, 2019, ADA opened a campus it owns — complete with new classrooms,
              a library, computer lab, science lab, running water, and a paved courtyard.
            </p>
          </motion.div>

          <div className="hist-gallery-grid">
            {newCampusImages.map((img, i) => {
              const tall = i === 0 || i === 3;
              const uid = `new-${i}`;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.07)}
                  onClick={() => setActiveImg(img.src)}
                  onMouseEnter={() => setHovered(uid)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "relative", cursor: "pointer",
                    overflow: "hidden", borderRadius: "2px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                    /* span 2 rows only on desktop (3-col grid) */
                    gridRow: tall ? "span 2" : "span 1",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{
                      width: "100%",
                      height: tall ? "100%" : "200px",
                      minHeight: tall ? "412px" : "200px",
                      objectFit: "cover", display: "block",
                      transition: "transform 0.45s ease",
                      transform: hovered === uid ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(26,10,0,0.7) 0%, rgba(26,10,0,0.05) 55%, transparent 100%)",
                    opacity: hovered === uid ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }} />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "14px 16px",
                    transform: hovered === uid ? "translateY(0)" : "translateY(4px)",
                    opacity: hovered === uid ? 1 : 0.7,
                    transition: "all 0.3s ease",
                  }}>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", fontWeight: 600, letterSpacing: "0.3px" }}>
                      {img.caption}
                    </div>
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
                    background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
                    transform: hovered === uid ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left", transition: "transform 0.3s ease",
                  }} />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          OLD CAMPUS GALLERY
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                September 2012 – June 2019
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              First Campus —{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Before & After
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
                margin: "0 auto 20px",
              }}
            />
            <p style={{ color: "rgba(26,10,0,0.58)", fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
              Reverend Enders, staff, and volunteers transformed a leased one-story building
              into a two-story school that served hundreds of children for seven years.
            </p>
          </motion.div>

          <div className="hist-old-grid">
            {oldCampusImages.map((img, i) => {
              const tall = i === 2;
              const uid = `old-${i}`;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.07)}
                  onClick={() => setActiveImg(img.src)}
                  onMouseEnter={() => setHovered(uid)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "relative", cursor: "pointer",
                    overflow: "hidden", borderRadius: "2px",
                    boxShadow: "0 4px 20px rgba(26,10,0,0.1)",
                    gridRow: tall ? "span 2" : "span 1",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{
                      width: "100%",
                      height: tall ? "100%" : "210px",
                      minHeight: tall ? "432px" : "210px",
                      objectFit: "cover", display: "block",
                      transition: "transform 0.45s ease",
                      transform: hovered === uid ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(to top, rgba(139,26,26,0.72) 0%, rgba(139,26,26,0.05) 55%, transparent 100%)`,
                    opacity: hovered === uid ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }} />
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "14px 16px",
                    transform: hovered === uid ? "translateY(0)" : "translateY(8px)",
                    opacity: hovered === uid ? 1 : 0,
                    transition: "all 0.3s ease",
                  }}>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.9)", fontWeight: 600, letterSpacing: "0.3px" }}>
                      {img.caption}
                    </div>
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
                    background: `linear-gradient(to right, ${P.crimson}, ${P.gold})`,
                    transform: hovered === uid ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left", transition: "transform 0.3s ease",
                  }} />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CLOSING MILESTONE
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "88px 0" }}>
        <div style={{
          position: "absolute", top: "-160px", left: "-160px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              The Dream Continues
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>
          <motion.p {...fadeUp(0.1)} style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)", color: "rgba(255,255,255,0.82)",
            lineHeight: 1.85, margin: "0 0 40px", fontWeight: 400,
          }}>
            From 144 students in a leased building to 1,500 children on two owned campuses —
            ADA's history is a testament to what vision, sacrifice, and community can achieve.
            The third graduating class numbered 144 — the same as the very first class that
            walked through ADA's doors in 2012.
          </motion.p>
          <motion.div {...fadeUp(0.2)} className="hist-closing-stats">
            {[
              { v: "16", l: "First graduates, 2022" },
              { v: "36", l: "Second class" },
              { v: "144", l: "Third class" },
              { v: "350", l: "ADA-TI graduates" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: P.gold, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginTop: "6px" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LIGHTBOX
      ══════════════════════════════════════ */}
      {activeImg && (
        <motion.div
          onClick={() => setActiveImg(null)}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{
            position: "fixed", inset: 0, background: "rgba(26,10,0,0.94)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9999, padding: "1rem",
          }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.28 }}
            onClick={e => e.stopPropagation()}
            style={{
              padding: "4px",
              background: `linear-gradient(135deg, ${P.gold}, ${P.crimson})`,
              borderRadius: "3px",
              maxWidth: "calc(100vw - 2rem)",
            }}
          >
            <img
              src={activeImg} alt="History"
              style={{ maxHeight: "80vh", maxWidth: "100%", objectFit: "contain", display: "block", borderRadius: "1px" }}
            />
          </motion.div>
          <button
            onClick={() => setActiveImg(null)}
            style={{
              position: "absolute", top: "16px", right: "16px",
              background: "none", border: `1px solid rgba(240,180,41,0.4)`,
              borderRadius: "50%", width: "44px", height: "44px",
              color: P.gold, fontSize: "24px", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "border-color 0.2s, color 0.2s",
              /* Ensure tap target is accessible on mobile */
              touchAction: "manipulation",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = P.gold; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)"; e.currentTarget.style.color = P.gold; }}
          >
            ×
          </button>
        </motion.div>
      )}

    </div>
  );
}