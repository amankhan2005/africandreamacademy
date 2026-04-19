import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const P = {
  crimson:   "#8B1A1A",
  amber:     "#E8920A",
  gold:      "#F0B429",
  ink:       "#1A0A00",
  warmWhite: "#FFFBF5",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export default function NotFound() {
  return (
    <section style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      background: P.warmWhite,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 2rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Decorative orbs */}
      <div style={{
        position: "absolute", top: "-120px", right: "-120px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-100px", left: "-100px",
        width: "340px", height: "340px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,26,26,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ textAlign: "center", maxWidth: "480px", position: "relative", zIndex: 1 }}>

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ height: "1px", width: "32px", background: P.amber }} />
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
            African Dream Academy
          </span>
          <div style={{ height: "1px", width: "32px", background: P.amber }} />
        </motion.div>

        {/* 404 number */}
        <motion.div {...fadeUp(0.08)} style={{
          fontSize: "clamp(5rem, 18vw, 8rem)", fontWeight: 800,
          color: P.crimson, lineHeight: 1, letterSpacing: "-0.04em", margin: "0 0 4px",
        }}>
          4
          <span style={{ color: P.gold, borderBottom: `4px solid rgba(240,180,41,0.35)`, paddingBottom: "2px" }}>
            0
          </span>
          4
        </motion.div>

        {/* Accent bar */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
            background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
            margin: "18px auto 20px",
          }}
        />

        {/* Headline */}
        <motion.h1 {...fadeUp(0.22)} style={{
          fontSize: "clamp(1.4rem, 4vw, 1.9rem)", fontWeight: 800,
          color: P.ink, letterSpacing: "-0.025em", lineHeight: 1.2, margin: "0 0 14px",
        }}>
          Page not found
        </motion.h1>

        {/* Subtext */}
        <motion.p {...fadeUp(0.28)} style={{
          fontSize: "clamp(0.9rem, 1.3vw, 1rem)", color: "rgba(26,10,0,0.58)",
          lineHeight: 1.85, maxWidth: "360px", margin: "0 auto 36px",
        }}>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on the path to the dream.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.34)} style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          <Link
            to="/"
            style={{
              display: "inline-block", padding: "13px 32px",
              background: P.crimson, color: "#fff",
              fontWeight: 800, fontSize: "12px",
              letterSpacing: "1.5px", textTransform: "uppercase",
              borderRadius: "2px", textDecoration: "none",
              border: `2px solid ${P.crimson}`,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Go back home
          </Link>
          <Link
            to="/foundation/contact"
            style={{
              display: "inline-block", padding: "13px 32px",
              background: "transparent", color: P.crimson,
              fontWeight: 700, fontSize: "12px",
              letterSpacing: "1.5px", textTransform: "uppercase",
              borderRadius: "2px", textDecoration: "none",
              border: `2px solid rgba(139,26,26,0.28)`,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = P.crimson}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(139,26,26,0.28)"}
          >
            Contact us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}