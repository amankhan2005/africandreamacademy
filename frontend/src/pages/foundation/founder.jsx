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

const founderImages = [
  "/images/foundation/founder-1.webp",
  "/images/foundation/founder-2.webp",
  "/images/foundation/founder-3.webp",
  "/images/foundation/founder-4.webp",
  "/images/foundation/founder-5.webp",
];

export default function Founder() {
  const [activeImg, setActiveImg] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .founder-hero-inner { padding: 120px 2rem 96px; }
        .founder-content-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 960px) {
          .founder-content-grid { grid-template-columns: 1fr; gap: 40px; }
          .founder-hero-inner { padding: 80px 1.25rem 64px; }
          .founder-gallery-row1 { grid-template-columns: 1fr 1fr !important; }
          .founder-gallery-row2 { grid-template-columns: 1fr !important; }
          .founder-gallery-row1 img,
          .founder-gallery-row2 img { height: 220px !important; }
        }
        @media (max-width: 480px) {
          .founder-hero-inner { padding: 64px 1rem 56px; }
          .founder-gallery-row1 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO — crimson
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

        <div
          className="founder-hero-inner"
          style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              African Dream Academy
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.15, letterSpacing: "-0.025em", margin: "0 0 10px",
          }}>
            Founder's{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Welcome
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
            lineHeight: 1.85, maxWidth: "600px", margin: "0 auto", fontWeight: 400,
          }}>
            Welcome from the Founder &amp; CEO of African Dream Academy
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN CONTENT — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          {/* Two-col: photo + intro */}
          <div className="founder-content-grid" style={{ marginBottom: "72px" }}>

            <motion.div {...fadeUp(0)} style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", left: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(232,146,10,0.2)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(26,10,0,0.13)" }}>
                <img
                  src="/images/foundation/founder.webp"
                  alt="Samuel R. Enders, Founder & CEO of African Dream Academy"
                  style={{ width: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(26,10,0,0.55) 0%, transparent 45%)",
                }} />
                <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", marginBottom: "3px" }}>
                    Samuel R. Enders
                  </div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>
                    Founder &amp; CEO · African Dream Academy
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.12)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  A Personal Message
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800,
                color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                From Poverty to{" "}
                <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                  Purpose
                </span>
              </h2>

              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "28px" }} />

              <p style={{ color: "rgba(26,10,0,0.65)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.9, margin: "0 0 18px" }}>
                Having grown up in poverty in Liberia, West Africa, I know first hand both the dire need for better educational opportunities in that country and the empowerment that a quality education provides.
              </p>
              <p style={{ color: "rgba(26,10,0,0.65)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.9, margin: "0 0 18px" }}>
                As the youngest of nine children, I experienced the death of my father when I was just two months old. Simply to survive, I routinely searched through garbage cans for food. Other necessities, such as clothing, were hard to come by. Healthcare and education were unaffordable and out of reach.
              </p>
              <p style={{ color: "rgba(26,10,0,0.65)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.9, margin: 0 }}>
                In fact, by the age of 15, I had only managed to receive a third grade education. My challenges were only compounded as Liberia succumbed to a bloody civil war that ravaged Liberia's economy, infrastructure and its people.
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              transformOrigin: "left", height: "1px",
              background: `linear-gradient(to right, ${P.amber}, rgba(240,180,41,0.08))`,
              marginBottom: "64px",
            }}
          />

          {/* Full story */}
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>

            <motion.div {...fadeUp(0)} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px" }}>
              <div style={{ width: "32px", height: "1px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                The Full Story
              </span>
            </motion.div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Unfortunately, my early childhood experience mirrors that of children across Liberia — and much of Africa — even today.",
                "Through determination and providence, today I am very fortunate to have obtained a bachelor's degree in Organizational Leadership and a master's degree in Divinity and Education. Now it is my greatest passion, and the cause to which I have dedicated my life, to help Liberia's youth of today escape Liberia's iron grip of poverty through education.",
                "I founded African Dream Academy (ADA) in 2005. From 2005 to 2011, ADA operated the African Dream Camp (formerly known as Vacation Bible School) to provide counseling to 6,000 Liberian children for two week periods several times a year — to inspire them to reach their dreams and to educate them in the life skills they desperately need.",
                "September 10, 2012 marked an exciting new chapter for ADA, as it opened its first fully academic school with 144 children in classes from Nursery through the Fourth Grade. With the addition of ADA's first 12th Grade class in December 2020, when the school was allowed to reopen following a temporary closure due to the Covid-19 pandemic, current enrollment is 1,500 students, supported by an all-Liberian staff of 149, including administrators, teachers, and support personnel.",
                "Illiteracy remains an obstacle to breaking the country's cycle of poverty. The adult male literacy rate is 60.77%; whereas the female rate is 27.03%, showing a significant gap between the sexes.",
                "To see how you can help ADA's mission to empower African children through education, I encourage you to read through this website. And please visit often — ADA will update this site regularly to report on progress in our ongoing efforts in Liberia and our fundraising activities in the United States.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  {...fadeUp(i * 0.06)}
                  style={{
                    color: "rgba(26,10,0,0.65)",
                    fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                    lineHeight: 1.9,
                    margin: 0,
                    paddingLeft: "20px",
                    borderLeft: `3px solid ${i === 0 ? "transparent" : i % 2 === 0 ? "rgba(139,26,26,0.15)" : "rgba(232,146,10,0.2)"}`,
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Literacy stat cards */}
            <motion.div {...fadeUp(0.1)} style={{
              margin: "52px 0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}>
              {[
                { v: "60.77%", l: "Adult male literacy rate", c: P.crimson },
                { v: "27.03%", l: "Adult female literacy rate", c: P.amber },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "24px 20px",
                  background: "#fff",
                  border: `1px solid rgba(139,26,26,0.1)`,
                  borderTop: `3px solid ${s.c}`,
                  borderRadius: "2px",
                  textAlign: "center",
                  boxShadow: "0 2px 20px rgba(26,10,0,0.06)",
                }}>
                  <div style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: s.c, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "8px" }}>
                    {s.v}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(26,10,0,0.5)", letterSpacing: "0.5px", fontWeight: 600 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div {...fadeUp(0.1)} style={{
              borderTop: `1px solid rgba(139,26,26,0.12)`,
              paddingTop: "40px",
              marginTop: "16px",
            }}>
              <p style={{ color: "rgba(26,10,0,0.5)", fontSize: "14px", marginBottom: "16px", fontStyle: "italic" }}>
                Sincerely,
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%",
                  background: P.crimson,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  border: `3px solid ${P.gold}`,
                }}>
                  <span style={{ fontSize: "16px", fontWeight: 800, color: P.gold, letterSpacing: "-0.02em" }}>SE</span>
                </div>
                <div>
                  <div style={{ fontSize: "17px", fontWeight: 800, color: P.ink, letterSpacing: "-0.015em" }}>
                    Samuel R. Enders
                  </div>
                  <div style={{ fontSize: "12px", color: P.amber, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "3px" }}>
                    Founder &amp; CEO · African Dream Academy
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHOTO GALLERY — crimson
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>

        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-120px", left: "-120px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          {/* Header */}
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Photo Gallery
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Samuel R.{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                Enders
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
                margin: "0 auto",
              }}
            />
          </motion.div>

          {/* Row 1 — 3 images */}
          <div
            className="founder-gallery-row1"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "12px" }}
          >
            {founderImages.slice(0, 3).map((src, i) => (
              <GalleryTile
                key={i}
                src={src}
                index={i}
                height="280px"
                hovered={hoveredIdx === i}
                onEnter={() => setHoveredIdx(i)}
                onLeave={() => setHoveredIdx(null)}
                onClick={() => setActiveImg(src)}
                accentGradient={`linear-gradient(to right, ${P.gold}, ${P.amber})`}
                P={P}
              />
            ))}
          </div>

          {/* Row 2 — 2 images (wider) */}
          <div
            className="founder-gallery-row2"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}
          >
            {founderImages.slice(3, 5).map((src, j) => {
              const i = j + 3;
              return (
                <GalleryTile
                  key={i}
                  src={src}
                  index={i}
                  height="340px"
                  hovered={hoveredIdx === i}
                  onEnter={() => setHoveredIdx(i)}
                  onLeave={() => setHoveredIdx(null)}
                  onClick={() => setActiveImg(src)}
                  accentGradient={`linear-gradient(to right, ${P.crimsonD}, ${P.gold})`}
                  P={P}
                />
              );
            })}
          </div>

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
              alt="Samuel R. Enders"
              style={{ maxHeight: "85vh", maxWidth: "100%", objectFit: "contain", display: "block", borderRadius: "1px" }}
            />
          </motion.div>
          <button
            onClick={() => setActiveImg(null)}
            style={{
              position: "absolute", top: "24px", right: "28px",
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

function GalleryTile({ src, index, height, hovered, onEnter, onLeave, onClick, accentGradient, P }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.07 }}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ position: "relative", cursor: "pointer", overflow: "hidden", borderRadius: "2px" }}
    >
      <img
        src={src}
        alt={`Samuel R. Enders photo ${index + 1}`}
        style={{
          width: "100%", height, objectFit: "cover", display: "block",
          transition: "transform 0.45s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      />
      {/* Hover overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(139,26,26,0.75) 0%, rgba(139,26,26,0.08) 60%, transparent 100%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        display: "flex", alignItems: "flex-end", padding: "14px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
          View
        </div>
      </div>
      {/* Bottom accent bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
        background: accentGradient,
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left", transition: "transform 0.3s ease",
      }} />
      {/* Number badge */}
      <div style={{
        position: "absolute", top: "12px", right: "12px",
        background: "rgba(26,10,0,0.6)",
        border: `1px solid rgba(240,180,41,0.4)`,
        borderRadius: "2px", padding: "3px 8px",
        fontSize: "10px", fontWeight: 700, color: P.gold,
        letterSpacing: "1px",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}