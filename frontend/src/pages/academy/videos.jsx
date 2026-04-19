import { motion } from "framer-motion";
import { useRef } from "react";

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

const videos = [
  {
    src: "/videos/ada-2026.mp4",
    poster: "/images/thumbnails/ada-2026.webp",
    title: "ADA Growing and Changing Lives in 2026",
    description: "Overview of ADA's impact on students and families and the foundation's fundraising efforts throughout the year.",
    tag: "2026",
  },
  {
    src: "/videos/stories.mp4",
    poster: "/images/thumbnails/stories.webp",
    title: "Stories from the African Dream Academy",
    description: "In April 2024, Lydia Spinelli, ADAF Board President visited the school in Liberia along with a group of supporters. Listen to Sophia Pedrazzi, a high school senior, as she describes her amazing experience with the students and teachers.",
    tag: "2024",
  },
  {
    src: "/videos/history.mp4",
    poster: "/images/thumbnails/history.webp",
    title: "African Dream Academy: Then to Now and Beyond",
    description: "Over ten years have passed since African Dream Academy opened its doors to 144 children in September 2012. Watch the story of its beginning and how far it has come.",
    tag: "History",
  },
  {
    src: "/videos/campus.mp4",
    poster: "/images/thumbnails/campus.webp",
    title: "A 2021 Bird's-Eye View of the New ADA Campus",
    description: "We hired a Liberian filmmaker to make a 3-minute video, so that you can see up close how your gifts are changing the lives of our ADA children and their families.",
    tag: "Campus",
  },
];

function VideoCard({ v, i, accentColor }) {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  const handleToggle = () => {
    const vid = videoRef.current;
    const overlay = overlayRef.current;
    if (!vid || !overlay) return;
    if (vid.paused) {
      vid.play();
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
    } else {
      vid.pause();
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "auto";
    }
  };

  const handleVideoEnded = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
      overlayRef.current.style.pointerEvents = "auto";
    }
  };

  return (
    <motion.div
      {...fadeUp(i * 0.08)}
      className="vid-card"
      style={{
        background: "#fff",
        border: `1px solid rgba(139,26,26,0.1)`,
        borderRadius: "2px",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(26,10,0,0.07)",
        position: "relative",
      }}
    >
      {/* Video wrapper */}
      <div
        style={{ position: "relative", background: P.ink, cursor: "pointer" }}
        onClick={handleToggle}
      >
        <video
          ref={videoRef}
          poster={v.poster}
          onEnded={handleVideoEnded}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src={v.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play button overlay */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(26,10,0,0.28)",
            transition: "opacity 0.25s ease",
            opacity: 1,
          }}
        >
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "50%",
              background: "rgba(240,180,41,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 6px 32px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
            }}
          >
            {/* Triangle play icon */}
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: `18px solid ${P.ink}`,
                marginLeft: "4px",
              }}
            />
          </div>
        </div>

        {/* Tag badge */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            padding: "4px 12px",
            background: "rgba(26,10,0,0.72)",
            border: `1px solid ${accentColor}`,
            borderRadius: "2px",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: accentColor,
            pointerEvents: "none",
          }}
        >
          {v.tag}
        </div>
      </div>

      {/* Text */}
      <div style={{ padding: "24px 28px 28px", position: "relative" }}>
        {/* Accent line */}
        <div
          style={{
            width: "32px",
            height: "3px",
            borderRadius: "2px",
            background: `linear-gradient(to right, ${accentColor}, ${P.gold})`,
            marginBottom: "14px",
          }}
        />

        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 800,
            color: P.ink,
            margin: "0 0 10px",
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
          }}
        >
          {v.title}
        </h3>

        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(26,10,0,0.55)",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {v.description}
        </p>

        {/* Bottom hover bar */}
        <div
          className="vid-card-bar"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(to right, ${accentColor}, ${P.gold})`,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      {/* Left accent border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "3px",
          background: accentColor,
        }}
      />
    </motion.div>
  );
}

export default function Videos() {
  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .vid-hero-inner { padding: 120px 2rem 96px; }
        .vid-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }

        @media (max-width: 900px) {
          .vid-hero-inner { padding: 80px 1.25rem 64px; }
          .vid-grid { grid-template-columns: 1fr; gap: 24px; }
        }

        @media (max-width: 480px) {
          .vid-hero-inner { padding: 64px 1rem 56px; }
        }

        .vid-card video:focus { outline: none; }
        .vid-card:hover .vid-card-bar { transform: scaleX(1); }
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

        <div className="vid-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

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
            ADA{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Videos
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
            Watch how African Dream Academy is transforming lives through
            education and opportunity in Paynesville, Monrovia.
          </motion.p>

        </div>
      </section>

      {/* ══════════════════════════════════════
          VIDEO GRID — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          {/* Section label */}
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Watch & Learn
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Stories of{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Impact & Growth
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

          {/* Grid */}
          <div className="vid-grid">
            {videos.map((v, i) => {
              const accentColor = i % 3 === 0 ? P.crimson : i % 3 === 1 ? P.amber : P.gold;
              return (
                <VideoCard key={i} v={v} i={i} accentColor={accentColor} />
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CLOSING CTA — crimson
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "88px 0" }}>
        <div style={{
          position: "absolute", top: "-160px", left: "-160px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              Be Part of the Story
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>
          <motion.p {...fadeUp(0.1)} style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)", color: "rgba(255,255,255,0.82)",
            lineHeight: 1.85, margin: "0 0 40px", fontWeight: 400,
          }}>
            Every video you watch represents real children, real families, and a real future
            being built — one classroom at a time. Your support makes it possible.
          </motion.p>
          <motion.div {...fadeUp(0.2)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a
              href="/foundation/contact"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                background: P.gold,
                color: P.ink,
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                borderRadius: "2px",
                textDecoration: "none",
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
                display: "inline-block",
                padding: "14px 36px",
                background: "transparent",
                color: "#fff",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                borderRadius: "2px",
                border: "1px solid rgba(255,255,255,0.3)",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"}
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}