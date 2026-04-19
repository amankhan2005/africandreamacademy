import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const P = {
  crimson:  "#8B1A1A",
  crimsonD: "#6B1212",
  crimsonL: "#A52020",
  amber:    "#E8920A",
  gold:     "#F0B429",
  ink:      "#1A0A00",
  cream:    "#FDF6EC",
  warmWhite: "#FFFBF5",
};

const stats = [
  {
    number: "1,500+",
    label: "Students Educated",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    number: "10+",
    label: "Years of Impact",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    number: "100%",
    label: "Tuition-Free Education",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    number: "149",
    label: "Staff Members",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const images = [
  "/images/Impact/1.webp",
  "/images/Impact/2.webp",
  "/images/Impact/3.webp",
  "/images/Impact/4.webp",
  "/images/Impact/5.webp",
  "/images/Impact/6.webp",
  "/images/Impact/7.webp",
  "/images/Impact/8.webp",
  "/images/Impact/9.webp",
  "/images/Impact/10.webp",
];

const FONT = "'Inter', system-ui, sans-serif";

export default function ImpactSection() {
  const [activeImg, setActiveImg] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      style={{
        background: P.warmWhite,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Top gradient bar ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "6px",
        background: `linear-gradient(to right, ${P.crimson}, ${P.amber}, ${P.gold})`,
      }} />

      {/* ── Warm texture orbs ── */}
      <div style={{
        position: "absolute", top: "-200px", right: "-200px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: `radial-gradient(circle, rgba(232,146,10,0.07) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0px", left: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: `radial-gradient(circle, rgba(139,26,26,0.06) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* ── Header ── */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "88px 40px 64px", textAlign: "center",
      }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}
        >
          <div style={{ height: "1px", width: "36px", background: P.amber }} />
          <span style={{
            fontSize: "11px",
            fontFamily: FONT,
            fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: P.amber,
          }}>
            Many Dreams. One Hope. One Future.
          </span>
          <div style={{ height: "1px", width: "36px", background: P.amber }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800,
            fontFamily: FONT,
            color: P.ink, lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: "18px",
          }}
        >
          Our Impact in{" "}
          <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "2px" }}>
            Liberia
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            transformOrigin: "center", height: "3px", width: "56px", borderRadius: "2px",
            background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
            margin: "0 auto 20px",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            color: "rgba(26,10,0,0.55)", fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            lineHeight: 1.8,
            fontFamily: FONT,
            fontWeight: 400,
            maxWidth: "520px", margin: "0 auto",
          }}
        >
          Your support is transforming lives in Monrovia — giving children a
          world-class, tuition-free education and a future full of promise.
        </motion.p>
      </div>

      {/* ── Stats grid ── */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 40px 80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "24px",
      }}>
        {stats.map((item, i) => {
          const isHovered = hoveredCard === i;
          const accentColor = i % 2 === 0 ? P.crimson : P.amber;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: isHovered ? "#fffaf4" : "#fff",
                border: isHovered
                  ? `1px solid ${accentColor}40`
                  : `1px solid rgba(139,26,26,0.1)`,
                borderTop: `3px solid ${accentColor}`,
                padding: "36px 28px",
                textAlign: "center",
                boxShadow: isHovered
                  ? `0 12px 40px rgba(26,10,0,0.13), 0 0 0 1px ${accentColor}18`
                  : "0 2px 20px rgba(26,10,0,0.06)",
                borderRadius: "2px",
                position: "relative",
                cursor: "default",
                transition: "background 0.25s ease, border 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              {/* Icon */}
              <div style={{
                color: accentColor,
                display: "flex",
                justifyContent: "center",
                marginBottom: "16px",
                transform: isHovered ? "scale(1.12)" : "scale(1)",
                transition: "transform 0.25s ease",
              }}>
                {item.icon}
              </div>

              {/* Number */}
              <div style={{
                fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800,
                fontFamily: FONT,
                color: isHovered ? accentColor : P.ink,
                lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "10px",
                transition: "color 0.25s ease",
              }}>
                {item.number}
              </div>

              {/* Label */}
              <div style={{
                fontSize: "12px", color: "rgba(26,10,0,0.45)",
                fontFamily: FONT,
                letterSpacing: "1.5px",
                textTransform: "uppercase", fontWeight: 600,
              }}>
                {item.label}
              </div>

              {/* Bottom accent bar */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "3px",
                background: `linear-gradient(to right, ${P.crimson}, ${P.gold})`,
                transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
                borderRadius: "0 0 2px 2px",
              }} />
            </motion.div>
          );
        })}
      </div>

      {/* ── Gallery label ── */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "20px 20px 20px",
        display: "flex", alignItems: "center", justifyContent: "center", gap: "16px",
      }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(26,10,0,0.08)" }} />
        <span style={{
          fontSize: "11px",
          fontFamily: FONT,
          fontWeight: 700,
          letterSpacing: "4px", textTransform: "uppercase", color: "rgba(26,10,0,0.3)",
        }}>
          Gallery
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(26,10,0,0.08)" }} />
      </div>

      {/* ── Image marquee ── */}
      <div style={{ overflow: "hidden", paddingBottom: "64px" }}>
        <motion.div
          style={{ display: "flex", gap: "14px" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...Array(2)].map((_, di) => (
            <div key={di} style={{ display: "flex", gap: "14px", flexShrink: 0 }}>
              {images.map((src, i) => {
                const uid = `${di}-${i}`;
                return (
                  <motion.div
                    key={i}
                    onClick={() => setActiveImg(src)}
                    onMouseEnter={() => setHoveredIdx(uid)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: "relative", cursor: "pointer", flexShrink: 0,
                      overflow: "hidden", boxShadow: "0 4px 20px rgba(26,10,0,0.12)",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Impact ${i + 1}`}
                      style={{
                        height: "220px", width: "310px", objectFit: "cover",
                        display: "block", transition: "transform 0.35s ease",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: `linear-gradient(to top, rgba(139,26,26,0.72) 0%, rgba(139,26,26,0.1) 60%, transparent 100%)`,
                      opacity: hoveredIdx === uid ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      display: "flex", alignItems: "flex-end", padding: "16px",
                    }}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: "6px",
                        color: "#fff", fontSize: "12px",
                        fontFamily: FONT,
                        letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 600,
                      }}>
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
                      transform: hoveredIdx === uid ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left", transition: "transform 0.3s ease",
                    }} />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── CTA ── */}
      <div style={{ textAlign: "center", paddingBottom: "88px" }}>
        <motion.a
          href="/foundation/impact"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "15px 38px", background: P.crimson, color: "#fff",
            fontFamily: FONT,
            fontWeight: 700, fontSize: "13px",
            letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
            borderRadius: "3px", boxShadow: `0 4px 24px rgba(139,26,26,0.3)`,
            transition: "background 0.2s ease",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = P.crimsonD; }}
          onMouseLeave={e => { e.currentTarget.style.background = P.crimson; }}
        >
          See the Full Impact
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.a>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            onClick={() => setActiveImg(null)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, background: "rgba(26,10,0,0.92)",
              display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50,
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={e => e.stopPropagation()}
              style={{
                padding: "4px",
                background: `linear-gradient(135deg, ${P.gold}, ${P.crimson})`,
                borderRadius: "3px",
              }}
            >
              <img
                src={activeImg} alt="Impact"
                style={{ maxHeight: "85vh", maxWidth: "88vw", objectFit: "contain", display: "block", borderRadius: "1px" }}
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
                fontFamily: FONT,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = P.gold; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)"; e.currentTarget.style.color = P.gold; }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}