import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const P = {
  crimson:  "#8B1A1A",
  crimsonD: "#6B1212",
  amber:    "#E8920A",
  gold:     "#F0B429",
  ink:      "#1A0A00",
};

const FONT = "'Inter', system-ui, sans-serif";

export default function AboutSection() {
  return (
    <section
      style={{
        background: P.crimson,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* ── Subtle texture orbs ── */}
      <div style={{
        position: "absolute", top: "-180px", right: "-180px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,180,41,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-120px", left: "-120px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,0,0,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Top edge accent ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "4px",
        background: `linear-gradient(to right, ${P.gold}, ${P.amber}, ${P.crimsonD})`,
      }} />

      {/* ── Main grid ── */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "96px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "72px",
        alignItems: "center",
      }}>

        {/* ── IMAGE SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          {/* Gold frame accent */}
          <div style={{
            position: "absolute",
            top: "-14px", left: "-14px",
            width: "100%", height: "100%",
            border: `2px solid rgba(240,180,41,0.3)`,
            borderRadius: "2px",
            zIndex: 0,
          }} />

          <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden" }}>
            <img
              src="/images/about/about.png"
              alt="African Dream Academy"
              style={{
                width: "100%",
                height: "440px",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Subtle gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(26,10,0,0.45) 0%, transparent 55%)",
            }} />

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                position: "absolute", bottom: "24px", left: "24px",
                background: "rgba(26,10,0,0.72)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(240,180,41,0.25)",
                borderLeft: `3px solid ${P.gold}`,
                padding: "14px 20px",
                borderRadius: "2px",
              }}
            >
              <div style={{
                fontSize: "22px", fontWeight: 800,
                color: P.gold, letterSpacing: "-0.03em", lineHeight: 1,
              }}>
                1,500+
              </div>
              <div style={{
                fontSize: "11px", color: "rgba(255,255,255,0.55)",
                letterSpacing: "2px", textTransform: "uppercase",
                fontWeight: 600, marginTop: "5px",
              }}>
                Students Enrolled
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── CONTENT SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}
          >
            <div style={{ width: "32px", height: "1px", background: P.amber }} />
            <span style={{
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "3.5px", textTransform: "uppercase",
              color: P.amber,
            }}>
              Building Futures Through Education
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "18px",
            }}
          >
            About{" "}
            <span style={{
              color: P.gold,
              borderBottom: `3px solid rgba(240,180,41,0.4)`,
              paddingBottom: "2px",
            }}>
              African Dream Academy
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              transformOrigin: "left",
              height: "3px", width: "52px",
              borderRadius: "2px",
              background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
              marginBottom: "24px",
            }}
          />

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.32 }}
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              lineHeight: 1.85,
              fontWeight: 400,
              maxWidth: "480px",
              marginBottom: "32px",
            }}
          >
            Founded in 2012 with just 144 children from Nursery to 4th Grade,
            African Dream Academy has grown into a thriving institution serving
            over 1,500 students — providing free, high-quality education from
            Nursery through Twelfth Grade in the heart of Monrovia, Liberia.
          </motion.p>

          {/* Mini stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.4 }}
            style={{
              display: "flex", gap: "32px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "20px 0",
              marginBottom: "36px",
            }}
          >
            {[
              { value: "2012", label: "Founded" },
              { value: "10+",  label: "Years of Impact" },
              { value: "Free", label: "Tuition" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontSize: "1.5rem", fontWeight: 800,
                  color: P.gold, letterSpacing: "-0.03em", lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: "11px", color: "rgba(255,255,255,0.45)",
                  letterSpacing: "1.5px", textTransform: "uppercase",
                  fontWeight: 600, marginTop: "5px",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.48 }}
            style={{ display: "flex", flexWrap: "nowrap", gap: "12px", width: "100%" }}
          >
            {/* Primary */}
            <Link
              to="/academy/about"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                flex: 1,
                padding: "13px 20px",
                background: `linear-gradient(135deg, ${P.amber}, ${P.gold})`,
                color: P.ink,
                fontWeight: 700, fontSize: "13px",
                letterSpacing: "0.06em", textTransform: "uppercase",
                textDecoration: "none", borderRadius: "2px",
                boxShadow: "0 4px 20px rgba(232,146,10,0.35)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1";    e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Our Story
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* Secondary */}
            <Link
              to="/foundation/contact"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                flex: 1,
                padding: "13px 20px",
                background: "transparent",
                color: "#fff",
                fontWeight: 600, fontSize: "13px",
                letterSpacing: "0.06em", textTransform: "uppercase",
                textDecoration: "none", borderRadius: "2px",
                border: "1px solid rgba(255,255,255,0.22)",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent";             e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Support Us
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21S3 14.5 3 8.5a4.5 4.5 0 019-1 4.5 4.5 0 019 1C21 14.5 12 21 12 21z"/>
              </svg>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}