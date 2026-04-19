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

export default function Mission() {
  const [activeImg, setActiveImg] = useState(null);
  const [hoveredImg, setHoveredImg] = useState(null);

  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .mission-hero-inner { padding: 120px 2rem 96px; }

        .mission-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .mission-two-col-rev {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        .mission-three-col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .mission-philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 960px) {
          .mission-two-col,
          .mission-two-col-rev    { grid-template-columns: 1fr; gap: 40px; }
          .mission-img-rev-order  { order: -1; }
          .mission-three-col      { grid-template-columns: 1fr 1fr; gap: 16px; }
          .mission-philosophy-grid{ grid-template-columns: 1fr; }
          .mission-hero-inner     { padding: 80px 1.25rem 64px; }
        }
        @media (max-width: 560px) {
          .mission-three-col      { grid-template-columns: 1fr; }
          .mission-hero-inner     { padding: 64px 1rem 56px; }
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
          className="mission-hero-inner"
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
            Our{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Mission
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
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: P.gold,
            fontWeight: 800, letterSpacing: "0.02em",
            margin: "0 auto 16px", fontStyle: "italic",
          }}>
            "Many Dreams. One Hope."
          </motion.p>

          <motion.p {...fadeUp(0.35)} style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.85, maxWidth: "640px", margin: "0 auto", fontWeight: 400,
          }}>
            The shared mission of the African Dream Academy and the African Dream Academy
            Foundation is to reduce poverty and foster sustainable development by empowering
            African children through education.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MISSION + IMAGE 1 — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="mission-two-col">

            {/* Image 1 */}
            <motion.div {...fadeUp(0)} style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", left: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(232,146,10,0.2)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(26,10,0,0.13)", cursor: "pointer" }}
                onClick={() => setActiveImg("/images/mission/mission-1.webp")}
                onMouseEnter={() => setHoveredImg(1)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <img
                  src="/images/mission/mission-1.webp"
                  alt="ADA mission — empowering children through education"
                  style={{
                    width: "100%", height: "420px", objectFit: "cover", display: "block",
                    transition: "transform 0.45s ease",
                    transform: hoveredImg === 1 ? "scale(1.04)" : "scale(1)",
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,0,0.4) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "20px", left: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: P.gold, boxShadow: `0 0 8px ${P.gold}` }} />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>
                    Paynesville, Monrovia
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Mission text */}
            <motion.div {...fadeUp(0.12)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  Our Mission
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
                color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                Empowering Children{" "}
                <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                  Through Education
                </span>
              </h2>

              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "28px" }} />

              <p style={{ color: "rgba(26,10,0,0.65)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.9, margin: "0 0 18px" }}>
                The shared mission of the African Dream Academy (ADA) and the African Dream Academy Foundation (ADAF) is to reduce poverty and foster sustainable development by empowering African children through education.
              </p>
              <p style={{ color: "rgba(26,10,0,0.65)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.9, margin: 0 }}>
                We believe that education is the most powerful tool to break the cycle of poverty — giving every child a tuition-free, world-class education and a future full of promise.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VISION — crimson + Image 2
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>

        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="mission-two-col-rev">

            {/* Vision text */}
            <motion.div {...fadeUp(0)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  Our Vision
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800,
                color: "#fff", lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                A State-of-the-Art{" "}
                <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                  Institution
                </span>
              </h2>

              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "28px" }} />

              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.9, margin: "0 0 28px" }}>
                Our vision is to build a state-of-the-art educational institution in Liberia that provides a positive, healthy, and challenging environment for personal growth, academic excellence, and life-long learning.
              </p>

              {/* Vision pillars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: "◆", text: "Positive and nurturing learning environment" },
                  { icon: "◆", text: "Academically challenging programs for all grade levels" },
                  { icon: "◆", text: "Healthy development of the whole child — mind, body, spirit" },
                  { icon: "◆", text: "Lifelong leaders equipped to transform Liberia" },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.07 + 0.1)} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ color: P.gold, fontSize: "8px", marginTop: "6px", flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.7 }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div {...fadeUp(0.12)} className="mission-img-rev-order" style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", right: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(240,180,41,0.25)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div
                style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.3)", cursor: "pointer" }}
                onClick={() => setActiveImg("/images/mission/mission-2.webp")}
                onMouseEnter={() => setHoveredImg(2)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <img
                  src="/images/mission/mission-2.webp"
                  alt="ADA vision — building a better future"
                  style={{
                    width: "100%", height: "420px", objectFit: "cover", display: "block",
                    transition: "transform 0.45s ease",
                    transform: hoveredImg === 2 ? "scale(1.04)" : "scale(1)",
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,0,0.5) 0%, transparent 55%)" }} />
                <div style={{
                  position: "absolute", bottom: "20px", left: "20px",
                  background: "rgba(26,10,0,0.68)", backdropFilter: "blur(6px)",
                  border: `1px solid rgba(240,180,41,0.25)`, borderLeft: `3px solid ${P.gold}`,
                  padding: "10px 16px", borderRadius: "2px",
                }}>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: P.gold, lineHeight: 1 }}>Our Vision</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600, marginTop: "4px" }}>
                    African Dream Academy
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY — warm white + Image 3
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          {/* Section header */}
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Our Philosophy
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              What We{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Believe
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

          {/* Image 3 — full width banner */}
          <motion.div {...fadeUp(0.05)} style={{ marginBottom: "64px", position: "relative", borderRadius: "2px", overflow: "hidden", cursor: "pointer", boxShadow: "0 8px 40px rgba(26,10,0,0.12)" }}
            onClick={() => setActiveImg("/images/mission/mission-3.webp")}
            onMouseEnter={() => setHoveredImg(3)}
            onMouseLeave={() => setHoveredImg(null)}
          >
            <img
              src="/images/mission/mission-3.webp"
              alt="ADA philosophy — every child deserves opportunity"
              style={{
                width: "100%", height: "360px", objectFit: "cover", display: "block",
                transition: "transform 0.5s ease",
                transform: hoveredImg === 3 ? "scale(1.03)" : "scale(1)",
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,10,0,0.65) 0%, rgba(26,10,0,0.1) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", top: "50%", left: "48px", transform: "translateY(-50%)" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: P.amber, marginBottom: "10px" }}>
                Our Philosophy
              </div>
              <div style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "420px" }}>
                Every child deserves the chance to achieve their dreams
              </div>
              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px", color: P.gold, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
                View photo
              </div>
            </div>
            {/* Bottom accent */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "4px",
              background: `linear-gradient(to right, ${P.crimson}, ${P.gold}, ${P.amber})`,
            }} />
          </motion.div>

          {/* Philosophy cards */}
          <div className="mission-philosophy-grid">
            {[
              {
                num: "01",
                title: "Every Child Deserves Opportunity",
                body: "We believe every child deserves the opportunity to achieve their dreams through education. Our goal is to help students become responsible citizens and future leaders in their communities.",
                accent: P.crimson,
              },
              {
                num: "02",
                title: "Tuition-Free for All",
                body: "ADA offers tuition-free education so that children who cannot afford school fees can still receive a quality education. Financial barriers should never stand between a child and their future.",
                accent: P.amber,
              },
              {
                num: "03",
                title: "Whole-Child Development",
                body: "We provide a nurturing environment that supports intellectual, emotional, social, physical, and spiritual development — recognizing that education goes far beyond the classroom.",
                accent: P.gold,
              },
              {
                num: "04",
                title: "Critical & Creative Thinking",
                body: "By recognizing individual differences, we encourage students to think logically, creatively, and critically — developing skills that will serve them long after they leave our school.",
                accent: P.crimson,
              },
              {
                num: "05",
                title: "Celebrating Diversity",
                body: "Every student contributes uniquely to the African Dream Academy community. We celebrate the diversity of backgrounds, strengths, and perspectives each child brings.",
                accent: P.amber,
              },
              {
                num: "06",
                title: "Breaking the Cycle of Poverty",
                body: "Education is the key to breaking the cycle of poverty. We are committed to building a brighter future for Liberia's children — and for all of Africa.",
                accent: P.gold,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                style={{
                  background: "#fff",
                  border: `1px solid rgba(139,26,26,0.1)`,
                  borderLeft: `4px solid ${card.accent}`,
                  borderRadius: "2px",
                  padding: "28px 28px 28px 24px",
                  boxShadow: "0 2px 20px rgba(26,10,0,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Number watermark */}
                <div style={{
                  position: "absolute", top: "12px", right: "16px",
                  fontSize: "32px", fontWeight: 800, color: "rgba(139,26,26,0.05)",
                  letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none",
                }}>
                  {card.num}
                </div>
                <div style={{ width: "28px", height: "3px", borderRadius: "2px", background: `linear-gradient(to right, ${card.accent}, ${P.gold})`, marginBottom: "14px" }} />
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: P.ink, margin: "0 0 10px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(26,10,0,0.6)", lineHeight: 1.8, margin: 0 }}>
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          TWO MORE IMAGES — crimson
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>

        <div style={{
          position: "absolute", bottom: "-140px", left: "-140px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Life at ADA
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              The Dream in{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                Action
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

          {/* Images 4 & 5 — side by side */}
          <div className="mission-three-col" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {[
              { src: "/images/mission/mission-4.webp", label: "Students at African Dream Academy", caption: "Our students" },
              { src: "/images/mission/mission-5.webp", label: "ADA community and campus life",     caption: "Our community" },
            ].map((img, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                onClick={() => setActiveImg(img.src)}
                onMouseEnter={() => setHoveredImg(i + 4)}
                onMouseLeave={() => setHoveredImg(null)}
                style={{
                  position: "relative", cursor: "pointer",
                  overflow: "hidden", borderRadius: "2px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{
                    width: "100%", height: "380px", objectFit: "cover", display: "block",
                    transition: "transform 0.45s ease",
                    transform: hoveredImg === i + 4 ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(139,26,26,0.78) 0%, rgba(139,26,26,0.05) 55%, transparent 100%)",
                  opacity: hoveredImg === i + 4 ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }} />
                {/* Always-visible bottom gradient */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(26,10,0,0.5) 0%, transparent 50%)",
                }} />
                <div style={{
                  position: "absolute", bottom: "20px", left: "20px",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: P.gold, boxShadow: `0 0 8px ${P.gold}` }} />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>
                    {img.caption}
                  </span>
                </div>
                {/* Hover view label */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex", alignItems: "center", gap: "8px",
                  color: "#fff", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700,
                  opacity: hoveredImg === i + 4 ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  View photo
                </div>
                {/* Bottom accent bar */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "4px",
                  background: i === 0
                    ? `linear-gradient(to right, ${P.gold}, ${P.amber})`
                    : `linear-gradient(to right, ${P.amber}, ${P.gold})`,
                  transform: hoveredImg === i + 4 ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left", transition: "transform 0.3s ease",
                }} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CLOSING CTA — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>

          <motion.div {...fadeUp(0)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              Join the Mission
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h2 {...fadeUp(0.08)} style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
            color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
          }}>
            Be Part of the{" "}
            <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
              Dream
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
              background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
              margin: "0 auto 28px",
            }}
          />

          <motion.p {...fadeUp(0.15)} style={{
            color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
            lineHeight: 1.9, margin: "0 auto 40px", maxWidth: "540px",
          }}>
            Every contribution helps ADA provide tuition-free, world-class education
            to children in Liberia. Together, we can turn many dreams into one shared hope.
          </motion.p>

          <motion.div {...fadeUp(0.2)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a
              href="/foundation/contact"
              style={{
                display: "inline-block", padding: "14px 36px",
                background: P.crimson, color: "#fff",
                fontWeight: 800, fontSize: "13px",
                letterSpacing: "1.5px", textTransform: "uppercase",
                borderRadius: "2px", textDecoration: "none",
                border: `2px solid ${P.crimson}`,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Donate Now
            </a>
            <a
              href="/academy/about"
              style={{
                display: "inline-block", padding: "14px 36px",
                background: "transparent", color: P.crimson,
                fontWeight: 700, fontSize: "13px",
                letterSpacing: "1.5px", textTransform: "uppercase",
                borderRadius: "2px", textDecoration: "none",
                border: `2px solid rgba(139,26,26,0.3)`,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = P.crimson}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(139,26,26,0.3)"}
            >
              Learn More
            </a>
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
              alt="Mission"
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