import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const P = {
  crimson: "#8B1A1A",
  crimsonD: "#6B1212",
  amber: "#E8920A",
  gold: "#F0B429",
  ink: "#1A0A00",
  warmWhite: "#FFFBF5",
};

const FONT = "'Inter', system-ui, sans-serif";

export default function YouthAmbassador() {
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
        .ya-grid {
          max-width: 80rem;
          margin: 0 auto;
          padding: 96px 40px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px;
          align-items: center;
        }
        .ya-img {
          height: 420px;
        }
        .ya-frame {
          top: 14px;
          right: -14px;
        }
        .ya-body p {
          max-width: 480px;
        }
        @media (max-width: 768px) {
          .ya-grid {
            grid-template-columns: 1fr;
            padding: 64px 20px;
            gap: 48px;
          }
          .ya-img {
            height: 280px;
          }
          .ya-frame {
            top: 10px;
            right: -10px;
          }
          .ya-image-col {
            order: -1;
          }
          .ya-body p {
            max-width: 100%;
          }
        }
      `}</style>

      {/* ── Texture orbs ── */}
      <div style={{
        position: "absolute", top: "-160px", left: "-160px",
        width: "480px", height: "480px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,146,10,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-120px", right: "-120px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,26,26,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Main grid ── */}
      <div className="ya-grid">

        {/* ── CONTENT SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
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
              Youth Leadership Initiative
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
              lineHeight: 1.25,
              letterSpacing: "-0.025em",
              margin: "0 0 18px 0",
            }}
          >
            ADAF Youth{" "}
            <span style={{
              color: P.crimson,
              borderBottom: `3px solid ${P.gold}`,
              paddingBottom: "4px",
              display: "inline-block",
            }}>
              Ambassador
            </span>{" "}
            Program 2025–26
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
          <motion.div
            className="ya-body"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p style={{
              color: "rgba(26,10,0,0.55)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
              lineHeight: 1.85,
              fontWeight: 400,
              margin: "0 0 16px 0",
            }}>
              Announcing our new ADAF Youth Ambassador Program 2025–26.
              We are thrilled to launch this initiative connecting passionate
              high school students in the U.S. with the mission of the African
              Dream Academy Foundation.
            </p>
            <p style={{
              color: "rgba(26,10,0,0.55)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
              lineHeight: 1.85,
              fontWeight: 400,
              margin: "0 0 36px 0",
            }}>
              Learn more about the program and support a student by donating
              directly to one of our youth ambassadors.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.38 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Link
              to="/youth-ambassador"
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
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── IMAGE SIDE ── */}
        <motion.div
          className="ya-image-col"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          {/* Gold frame offset */}
          <div
            className="ya-frame"
            style={{
              position: "absolute",
              width: "100%", height: "100%",
              border: `2px solid rgba(232,146,10,0.2)`,
              borderRadius: "2px",
              zIndex: 0,
            }}
          />

          <div style={{
            position: "relative",
            zIndex: 1,
            borderRadius: "2px",
            overflow: "hidden",
            boxShadow: "0 16px 48px rgba(26,10,0,0.14)",
          }}>
            <img
              src="/images/home/ADA_Ambassador_Ollie.png"
              alt="Youth Ambassador Program"
              className="ya-img"
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
              background: "linear-gradient(to top, rgba(26,10,0,0.35) 0%, rgba(26,10,0,0.05) 50%, transparent 100%)",
            }} />

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
                fontSize: "11px", color: "rgba(255,255,255,0.75)",
                letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600,
              }}>
                ADA 2025–26 · U.S. Initiative
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}