import { motion } from "framer-motion";
import { useState } from "react";

const P = {
  crimson:   "#8B1A1A",
  crimsonD:  "#6B1212",
  amber:     "#E8920A",
  gold:      "#F0B429",
  ink:       "#1A0A00",
  warmWhite: "#FFFBF5",
};

const FONT = "'Inter', system-ui, sans-serif";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

const impactData = [
  {
    img: "/images/impact2/1.webp",
    num: "1,200+",
    label: "Students enrolled",
    caption: "From 144 students in 2012 to a thriving community of learners today.",
  },
  {
    img: "/images/impact2/2.webp",
    num: "60%+",
    label: "Female enrollment",
    caption: "Advancing gender equity across every grade level.",
  },
  {
    img: "/images/impact2/3.webp",
    num: "7",
    label: "Graduating classes",
    caption: "Seven cohorts of graduates shaping a brighter future for Liberia.",
  },
  {
    img: "/images/impact2/4.webp",
    num: "715",
    label: "Seniors with diplomas",
    caption: "Students empowered with credentials and new opportunities.",
  },
  {
    img: "/images/impact2/5.webp",
    num: "100%",
    label: "Kindergarten reading rate",
    caption: "Every kindergarten student achieving strong foundational literacy.",
  },
  {
    img: "/images/impact2/6.webp",
    num: "100%",
    label: "Seniors passing Liberia's exam",
    caption: "Every graduating senior passing the national graduation exam.",
  },
  {
    img: "/images/impact2/7.webp",
    num: "1,000+",
    label: "Vocational graduates",
    caption: "Community members building careers and businesses through skills training.",
  },
];

const moreImages = ["more1.webp", "more2.webp", "more3.webp"];
const galleryItems = [1, 2, 3, 4, 5];

export default function Impact() {
  const [activeImg, setActiveImg]   = useState(null);
  const [hoveredImg, setHoveredImg] = useState(null);

  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        /* ── Desktop (unchanged) ── */
        .impact-hero-inner   { padding: 120px 2rem 96px; }
        .impact-grid-7       { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .impact-more-grid    { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .impact-gallery-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; }

        /* ── Tablet 960px ── */
        @media (max-width: 960px) {
          .impact-grid-7       { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .impact-more-grid    { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .impact-gallery-grid { grid-template-columns: repeat(3, 1fr); }
          .impact-hero-inner   { padding: 80px 1.25rem 64px; }
        }

        /* ── Mobile 560px ── */
        @media (max-width: 560px) {
          .impact-hero-inner    { padding: 52px 1rem 44px; }
          .impact-grid-7        { grid-template-columns: 1fr; gap: 28px; }
          .impact-more-grid     { grid-template-columns: 1fr; gap: 16px; }
          .impact-gallery-grid  { grid-template-columns: repeat(2, 1fr); gap: 5px; }
          .impact-section-pad   { padding: 56px 0 !important; }
          .impact-section-hdr   { margin-bottom: 32px !important; }
          .impact-card-img      { height: 260px !important; }
          .impact-more-img      { height: 220px !important; }
          .impact-gallery-img   { height: 150px !important; }
          .impact-offset-border { display: none !important; }
          .impact-cta-btns      { flex-direction: column !important; align-items: stretch !important; }
          .impact-cta-btn       { text-align: center !important; padding: 14px 24px !important; }
          .impact-stat-num      { font-size: 15px !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
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

        <div className="impact-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              African Dream Academy
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(1.8rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.15, letterSpacing: "-0.025em", margin: "0 0 10px",
          }}>
            ADA's{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Impact
            </span>
            {" "}at a Glance
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

          <motion.p {...fadeUp(0.35)} style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.85, maxWidth: "600px", margin: "0 auto",
          }}>
            Your donation is empowering the next generation in Liberia — giving
            every child a tuition-free, world-class education and a future full of promise.
          </motion.p>
        </div>
      </section>

      {/* ══ SECTION 1 — warm white — 7-image grid ══ */}
      <section className="impact-section-pad" style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} className="impact-section-hdr" style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                By the Numbers
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Measuring the{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Dream
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

          <div className="impact-grid-7">
            {impactData.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                onClick={() => setActiveImg(item.img)}
                onMouseEnter={() => setHoveredImg(i)}
                onMouseLeave={() => setHoveredImg(null)}
                style={{ cursor: "pointer" }}
              >
                <div style={{ position: "relative", marginBottom: "20px" }}>
                  <div className="impact-offset-border" style={{
                    position: "absolute", top: "10px", left: "-10px",
                    width: "100%", height: "100%",
                    border: `2px solid rgba(232,146,10,0.2)`, borderRadius: "2px", zIndex: 0,
                  }} />
                  <div style={{
                    position: "relative", zIndex: 1, borderRadius: "2px",
                    overflow: "hidden", boxShadow: "0 8px 32px rgba(26,10,0,0.1)",
                  }}>
                    <img
                      src={item.img}
                      alt={item.label}
                      className="impact-card-img"
                      style={{
                        width: "100%", height: "420px", objectFit: "cover", display: "block",
                        transition: "transform 0.45s ease",
                        transform: hoveredImg === i ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(139,26,26,0.75) 0%, transparent 55%)",
                      opacity: hoveredImg === i ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }} />
                    <div style={{
                      position: "absolute", bottom: "14px", left: "14px",
                      background: "rgba(26,10,0,0.72)",
                      backdropFilter: "blur(6px)",
                      border: `1px solid rgba(240,180,41,0.3)`,
                      borderLeft: `3px solid ${P.gold}`,
                      padding: "8px 14px", borderRadius: "2px",
                    }}>
                      <div className="impact-stat-num" style={{ fontSize: "18px", fontWeight: 800, color: P.gold, lineHeight: 1, letterSpacing: "-0.02em" }}>{item.num}</div>
                      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.55)", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600, marginTop: "3px" }}>
                        {item.label}
                      </div>
                    </div>
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
                      background: `linear-gradient(to right, ${P.crimson}, ${P.gold})`,
                      transform: hoveredImg === i ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left", transition: "transform 0.3s ease",
                    }} />
                  </div>
                </div>
                <p style={{ fontSize: "0.92rem", color: "rgba(26,10,0,0.6)", lineHeight: 1.75, margin: 0 }}>
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ SECTION 2 — crimson — More Than Education ══ */}
      <section className="impact-section-pad" style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>
        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <motion.div {...fadeUp(0)} className="impact-section-hdr" style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Whole-Child Approach
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 20px",
            }}>
              More Than{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                Education
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
                margin: "0 auto 24px",
              }}
            />
            <p style={{
              color: "rgba(255,255,255,0.78)", fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
              lineHeight: 1.9, maxWidth: "640px", margin: "0 auto",
            }}>
              For many students, the African Dream Academy is not just a school — it is a
              place of safety, nourishment, and opportunity. It provides a foundation where
              children can grow, learn, and build a future filled with hope and possibility.
            </p>
          </motion.div>

          <div className="impact-more-grid">
            {moreImages.map((img, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                onClick={() => setActiveImg(`/images/impact2/${img}`)}
                onMouseEnter={() => setHoveredImg(`more-${i}`)}
                onMouseLeave={() => setHoveredImg(null)}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <div className="impact-offset-border" style={{
                  position: "absolute", top: "10px", right: "-10px",
                  width: "100%", height: "100%",
                  border: `2px solid rgba(240,180,41,0.2)`, borderRadius: "2px", zIndex: 0,
                }} />
                <div style={{
                  position: "relative", zIndex: 1, borderRadius: "2px",
                  overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
                }}>
                  <img
                    src={`/images/impact2/${img}`}
                    alt="More than education"
                    className="impact-more-img"
                    style={{
                      width: "100%", height: "340px", objectFit: "cover", display: "block",
                      transition: "transform 0.45s ease",
                      transform: hoveredImg === `more-${i}` ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(26,10,0,0.5) 0%, transparent 55%)",
                  }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(139,26,26,0.75) 0%, rgba(139,26,26,0.05) 60%, transparent 100%)",
                    opacity: hoveredImg === `more-${i}` ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }} />
                  <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex", alignItems: "center", gap: "8px",
                    color: "#fff", fontSize: "12px", letterSpacing: "2px",
                    textTransform: "uppercase", fontWeight: 700,
                    opacity: hoveredImg === `more-${i}` ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                    View photo
                  </div>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "4px",
                    background: i === 1
                      ? `linear-gradient(to right, ${P.amber}, ${P.gold})`
                      : `linear-gradient(to right, ${P.gold}, ${P.amber})`,
                    transform: hoveredImg === `more-${i}` ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left", transition: "transform 0.3s ease",
                  }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — warm white — Moments Gallery ══ */}
      <section className="impact-section-pad" style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} className="impact-section-hdr" style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Photo Gallery
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Moments of{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Impact
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

          <div className="impact-gallery-grid">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                onClick={() => setActiveImg(`/images/impact2/gallery/${item}.webp`)}
                onMouseEnter={() => setHoveredImg(`gallery-${i}`)}
                onMouseLeave={() => setHoveredImg(null)}
                style={{
                  position: "relative", cursor: "pointer",
                  overflow: "hidden", borderRadius: "2px",
                  boxShadow: "0 4px 20px rgba(26,10,0,0.1)",
                }}
              >
                <img
                  src={`/images/impact2/gallery/${item}.webp`}
                  alt={`Moment of impact ${item}`}
                  className="impact-gallery-img"
                  style={{
                    width: "100%", height: "260px", objectFit: "cover", display: "block",
                    transition: "transform 0.45s ease",
                    transform: hoveredImg === `gallery-${i}` ? "scale(1.07)" : "scale(1)",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(139,26,26,0.75) 0%, rgba(139,26,26,0.08) 60%, transparent 100%)",
                  opacity: hoveredImg === `gallery-${i}` ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  display: "flex", alignItems: "flex-end", padding: "16px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                    View
                  </div>
                </div>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(to right, ${P.crimson}, ${P.gold})`,
                  transform: hoveredImg === `gallery-${i}` ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left", transition: "transform 0.3s ease",
                }} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ CLOSING CTA — crimson ══ */}
      <section className="impact-section-pad" style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>
        <div style={{
          position: "absolute", bottom: "-140px", left: "-140px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              Join the Mission
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h2 {...fadeUp(0.08)} style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
          }}>
            Help Us Write the Next{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
              Chapter
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
              background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
              margin: "0 auto 28px",
            }}
          />

          <motion.p {...fadeUp(0.15)} style={{
            color: "rgba(255,255,255,0.78)", fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
            lineHeight: 1.9, margin: "0 auto 40px", maxWidth: "540px",
          }}>
            Every contribution helps ADA provide tuition-free, world-class education
            to children in Liberia. Together, we can turn many dreams into one shared hope.
          </motion.p>

          <motion.div
            {...fadeUp(0.2)}
            className="impact-cta-btns"
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}
          >
            <a
              href="/foundation/contact"
              className="impact-cta-btn"
              style={{
                display: "inline-block", padding: "14px 36px",
                background: P.gold, color: P.ink,
                fontWeight: 800, fontSize: "13px",
                letterSpacing: "1.5px", textTransform: "uppercase",
                borderRadius: "2px", textDecoration: "none",
                border: `2px solid ${P.gold}`,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Donate Now
            </a>
            <a
              href="/academy/about"
              className="impact-cta-btn"
              style={{
                display: "inline-block", padding: "14px 36px",
                background: "transparent", color: "#fff",
                fontWeight: 700, fontSize: "13px",
                letterSpacing: "1.5px", textTransform: "uppercase",
                borderRadius: "2px", textDecoration: "none",
                border: `2px solid rgba(255,255,255,0.3)`,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"}
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ LIGHTBOX ══ */}
      {activeImg && (
        <motion.div
          onClick={() => setActiveImg(null)}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(26,10,0,0.94)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9999, padding: "1rem",
          }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
              src={activeImg}
              alt="Impact"
              style={{ maxHeight: "85vh", maxWidth: "100%", objectFit: "contain", display: "block", borderRadius: "1px" }}
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