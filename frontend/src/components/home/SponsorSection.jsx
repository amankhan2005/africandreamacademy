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

export default function SponsorSection() {
  return (
    <section
      style={{
        background: P.crimson,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Texture orbs ── */}
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

      {/* ── Outer padding wrapper ── */}
      <div style={{ padding: "96px 2rem" }}>

        {/* ── Max-width container ── */}
        <div style={{
          maxWidth: "80rem",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "80px",
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
            {/* Gold frame offset */}
            <div style={{
              position: "absolute",
              top: "14px", left: "-14px",
              width: "100%", height: "100%",
              border: "2px solid rgba(240,180,41,0.25)",
              borderRadius: "2px",
              zIndex: 0,
            }} />

            <div style={{
              position: "relative",
              zIndex: 1,
              borderRadius: "2px",
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
            }}>
              <img
                src="/images/home/sponsor.webp"
                alt="Sponsor a child"
                style={{
                  width: "100%", height: "420px",
                  objectFit: "cover", display: "block",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
              />

              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(26,10,0,0.5) 0%, rgba(26,10,0,0.1) 55%, transparent 100%)",
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
                  $30/mo
                </div>
                <div style={{
                  fontSize: "11px", color: "rgba(255,255,255,0.55)",
                  letterSpacing: "2px", textTransform: "uppercase",
                  fontWeight: 600, marginTop: "5px",
                }}>
                  Sponsors One Child
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
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}
            >
              <div style={{ width: "32px", height: "1px", background: P.amber }} />
              <span style={{
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "3.5px", textTransform: "uppercase",
                color: P.amber,
              }}>
                Support a Child
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.14 }}
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                margin: "0 0 18px 0",
              }}
            >
              Sponsor a child's education —{" "}
              <span style={{
                color: P.gold,
                borderBottom: `3px solid rgba(240,180,41,0.4)`,
                paddingBottom: "4px",
                display: "inline-block",
              }}>
                change a life
              </span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26 }}
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                lineHeight: 1.85,
                fontWeight: 400,
                maxWidth: "480px",
                margin: "0 0 36px 0",
              }}
            >
              Over ten years have passed since African Dream Academy opened its
              doors to 144 children in September 2012. Your sponsorship directly
              funds a child's free, high-quality education — from uniforms and
              meals to teachers and books.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.38 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link
                to="/foundation/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "fit-content",
                  padding: "13px 40px",
                  background: `linear-gradient(135deg, ${P.amber}, ${P.gold})`,
                  color: P.ink,
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "2px",
                  boxShadow: "0 4px 24px rgba(232,146,10,0.35)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = "0.88";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Support Us
                <svg
                  width="14" height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}