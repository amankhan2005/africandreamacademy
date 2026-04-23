import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const P = {
  crimson:  "#8B1A1A",
  crimsonD: "#6B1212",
  amber:    "#E8920A",
  gold:     "#F0B429",
  ink:      "#1A0A00",
  warmWhite: "#FFFBF5",
};

const FONT = "'Inter', system-ui, sans-serif";

export default function VideoSection() {
  return (
    <section
      style={{
        background: P.warmWhite,
        fontFamily: FONT,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Responsive styles ── */}
      <style>{`
        .video-grid {
          max-width: 80rem;
          margin: 0 auto;
          padding: 96px 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px;
          align-items: center;
        }
        .video-img {
          height: 420px;
        }
        .video-frame {
          top: 14px;
          left: -14px;
        }
        @media (max-width: 768px) {
          .video-grid {
            grid-template-columns: 1fr;
            padding: 64px 20px;
            gap: 48px;
          }
          .video-img {
            height: 260px;
          }
          .video-frame {
            top: 10px;
            left: -10px;
          }
        }
      `}</style>

      {/* ── Texture orbs ── */}
      <div style={{
        position: "absolute", top: "-160px", right: "-160px",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,146,10,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-120px", left: "-120px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,26,26,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Main grid ── */}
      <div className="video-grid">

        {/* ── IMAGE SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          {/* Gold frame offset */}
          <div
            className="video-frame"
            style={{
              position: "absolute",
              width: "100%", height: "100%",
              border: `2px solid rgba(232,146,10,0.2)`,
              borderRadius: "2px",
              zIndex: 0,
            }}
          />

          <Link to="/academy/videos" style={{ display: "block", position: "relative", zIndex: 1 }}>
            <div style={{ borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(26,10,0,0.14)", position: "relative" }}>
              <img
                src="/images/home/video.png"
                alt="ADA Video"
                className="video-img"
                style={{
                  width: "100%",
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

              {/* Play button */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "68px", height: "68px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(6px)",
                    border: "2px solid rgba(255,255,255,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontSize: "20px",
                    paddingLeft: "4px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                  }}
                >
                  ▶
                </motion.div>
              </div>

              {/* Bottom label */}
              <div style={{
                position: "absolute", bottom: "20px", left: "20px",
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: P.gold,
                  boxShadow: `0 0 8px ${P.gold}`,
                }} />
                <span style={{
                  fontSize: "11px", color: "rgba(255,255,255,0.7)",
                  letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600,
                }}>
                  ADA 2026 · Monrovia, Liberia
                </span>
              </div>
            </div>
          </Link>
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
              ADA 2026
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
              color: P.ink,
              lineHeight: 1.3,
              letterSpacing: "-0.025em",
              margin: "0 0 18px 0",
            }}
          >
            ADA Growing and{" "}
            <span style={{
              color: P.crimson,
              borderBottom: `3px solid ${P.gold}`,
              paddingBottom: "2px",
            }}>
              Changing Lives
            </span>
            {" "}in 2026
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
              background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
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
              color: "rgba(26,10,0,0.55)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
              lineHeight: 1.85,
              fontWeight: 400,
              maxWidth: "480px",
              marginBottom: "36px",
            }}
          >
            Watch an overview of ADA's impact on students and families, and
            the foundation's fundraising efforts throughout the year.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.38 }}
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Link
              to="/academy/videos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "fit-content",
                padding: "13px 40px",
                background: P.crimson,
                color: "#fff",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                boxShadow: "0 4px 24px rgba(139,26,26,0.3)",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = P.crimsonD;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = P.crimson;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  width: "22px", height: "22px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "8px", paddingLeft: "2px", flexShrink: 0,
                }}
              >
                ▶
              </span>
              Watch Video
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}