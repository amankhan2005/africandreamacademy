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

const stats = [
  { value: "2011", label: "Founded" },
  { value: "501(c)(3)", label: "Nonprofit Status" },
  { value: "1,500+", label: "Children Supported" },
  { value: "Free", label: "Tuition" },
];

export default function FoundationSection() {
  return (
    <section
      style={{
        position: "relative",
        fontFamily: FONT,
        overflow: "hidden",
        minHeight: "680px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── Background image ── */}
      <img
        src="/images/home/foundation.jpg"
        alt="African Dream Academy Foundation"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
        }}
      />

      {/* ── Multi-layer overlay ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(26,10,0,0.92) 0%, rgba(26,10,0,0.78) 45%, rgba(139,26,26,0.55) 100%)",
      }} />

      {/* ── Crimson vignette bottom ── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "220px",
        background: "linear-gradient(to top, rgba(139,26,26,0.35) 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* ── Gold top accent ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "4px",
        background: `linear-gradient(to right, ${P.gold}, ${P.amber}, transparent)`,
      }} />

      {/* ── Texture orb ── */}
      <div style={{
        position: "absolute", top: "-200px", right: "-200px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* ── Content ── */}
      <div style={{ padding: "112px 2rem", width: "100%", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ maxWidth: "680px" }}
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
                About the Foundation
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.14 }}
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                margin: "0 0 18px 0",
              }}
            >
              African Dream{" "}
              <span style={{
                color: P.gold,
                borderBottom: `3px solid rgba(240,180,41,0.45)`,
                paddingBottom: "4px",
                display: "inline-block",
              }}>
                Academy Foundation
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
                marginBottom: "28px",
              }}
            />

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                lineHeight: 1.85,
                fontWeight: 400,
                margin: "0 0 16px 0",
              }}>
                The African Dream Academy Foundation (ADAF) was established in 2011
                with the sole mission of supporting the African Dream Academy (ADA) —
                a tuition-free, independent, co-educational school located in
                Monrovia, Liberia.
              </p>
              <p style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                lineHeight: 1.85,
                fontWeight: 400,
                margin: "0 0 16px 0",
              }}>
                Incorporated as a 501(c)(3) nonprofit in Indiana and registered as a
                charity in New York, the Foundation raises tax-deductible and in-kind
                donations that directly fund ADA's annual needs.
              </p>
              <p style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                lineHeight: 1.85,
                fontWeight: 400,
                margin: "0 0 36px 0",
              }}>
                Through this support, hundreds of Liberian children gain access to
                quality education — creating opportunities for a brighter future for
                both individuals and their communities.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.38 }}
              style={{
                display: "flex", flexWrap: "wrap", gap: "0",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
                padding: "20px 0",
                marginBottom: "40px",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1 1 120px",
                    padding: "0 24px 0 0",
                    borderRight: i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                    marginRight: i < stats.length - 1 ? "24px" : "0",
                  }}
                >
                  <div style={{
                    fontSize: "1.4rem", fontWeight: 800,
                    color: P.gold, letterSpacing: "-0.03em", lineHeight: 1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: "11px", color: "rgba(255,255,255,0.45)",
                    letterSpacing: "1.5px", textTransform: "uppercase",
                    fontWeight: 600, marginTop: "6px",
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
              transition={{ duration: 0.5, delay: 0.46 }}
              style={{
                display: "flex",
                flexWrap: "nowrap",
                gap: "12px",
                alignItems: "center",
              }}
            >
              {/* Primary */}
              <Link
                to="/foundation/founder"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "13px 36px",
                  background: `linear-gradient(135deg, ${P.amber}, ${P.gold})`,
                  color: P.ink,
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "2px",
                  boxShadow: "0 4px 24px rgba(232,146,10,0.4)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  flex: "1 1 auto",
                  minWidth: 0,
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
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Secondary */}
              <Link
                to="/foundation/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "13px 36px",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  transition: "background 0.2s ease, transform 0.2s ease",
                  flex: "1 1 auto",
                  minWidth: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Donate Now
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21S3 14.5 3 8.5a4.5 4.5 0 019-1 4.5 4.5 0 019 1C21 14.5 12 21 12 21z"/>
                </svg>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}