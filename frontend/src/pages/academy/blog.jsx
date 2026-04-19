import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogs } from "./blogData";

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

export default function Blog() {
  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .blog-hero-inner { padding: 120px 2rem 96px; }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        /* Motion wrapper and Link must be full height */
        .blog-grid > div { height: 100%; }
        .blog-grid > div > a { display: block; height: 100%; }

        .blog-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Text section grows to fill remaining card space */
        .blog-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px 22px 24px;
          position: relative;
        }

        /* Title takes available space, pushing read-more to bottom */
        .blog-card-title-wrap { flex: 1; }

        .blog-card-img { transition: transform 0.45s ease; }
        .blog-card:hover .blog-card-img { transform: scale(1.05); }
        .blog-card:hover .blog-card-bar { transform: scaleX(1); }
        .blog-card:hover .blog-card-title { color: ${P.crimson}; }

        @media (max-width: 1100px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .blog-hero-inner { padding: 80px 1.25rem 64px; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-hero-inner { padding: 64px 1rem 56px; }
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

        <div className="blog-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              Written by ADA Students
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.15, letterSpacing: "-0.025em", margin: "0 0 10px",
          }}>
             African Dream Academy{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
               Blog
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
            News, events, and stories from inside African Dream Academy —
            reported and written by the students themselves.
          </motion.p>

        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOG GRID — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          {/* Section label */}
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Latest Posts
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              News from{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Our Campus
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

          <div className="blog-grid">
            {blogs.map((blog, i) => {
              const accentColor = i % 3 === 0 ? P.crimson : i % 3 === 1 ? P.amber : P.gold;
              return (
                <motion.div key={blog.slug} {...fadeUp(i * 0.08)}>
                  <Link to={`/blog/${blog.slug}`} style={{ textDecoration: "none" }}>
                    <div
                      className="blog-card"
                      style={{
                        background: "#fff",
                        border: `1px solid rgba(139,26,26,0.1)`,
                        borderRadius: "2px",
                        overflow: "hidden",
                        boxShadow: "0 2px 20px rgba(26,10,0,0.07)",
                        position: "relative",
                        cursor: "pointer",
                      }}
                    >
                      {/* Image — fixed height, always cropped consistently */}
                      <div style={{ overflow: "hidden", position: "relative", flexShrink: 0 }}>
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="blog-card-img"
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        {/* Date badge */}
                        <div style={{
                          position: "absolute", bottom: "12px", left: "12px",
                          padding: "4px 10px",
                          background: "rgba(26,10,0,0.72)",
                          border: `1px solid ${accentColor}`,
                          borderRadius: "2px",
                          fontSize: "9px", fontWeight: 700,
                          letterSpacing: "2px", textTransform: "uppercase",
                          color: accentColor,
                        }}>
                          {blog.date}
                        </div>
                      </div>

                      {/* Text body — flex column, grows to fill card */}
                      <div className="blog-card-body">
                        <div style={{
                          width: "28px", height: "3px", borderRadius: "2px",
                          background: `linear-gradient(to right, ${accentColor}, ${P.gold})`,
                          marginBottom: "12px",
                          flexShrink: 0,
                        }} />

                        {/* Title wrapper fills space so read-more is always at bottom */}
                        <div className="blog-card-title-wrap">
                          <h3
                            className="blog-card-title"
                            style={{
                              fontSize: "0.95rem", fontWeight: 800,
                              color: P.ink, margin: 0,
                              lineHeight: 1.4, letterSpacing: "-0.01em",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {blog.title}
                          </h3>
                        </div>

                        {/* Read more — always pinned to bottom */}
                        <div style={{
                          display: "flex", alignItems: "center", gap: "6px",
                          marginTop: "14px",
                          fontSize: "11px", fontWeight: 700,
                          letterSpacing: "1.5px", textTransform: "uppercase",
                          color: accentColor,
                          flexShrink: 0,
                        }}>
                          Read more
                          <span style={{ fontSize: "14px", lineHeight: 1 }}>→</span>
                        </div>

                        {/* Bottom hover bar */}
                        <div
                          className="blog-card-bar"
                          style={{
                            position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
                            background: `linear-gradient(to right, ${accentColor}, ${P.gold})`,
                            transform: "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>

                      {/* Left accent border */}
                      <div style={{
                        position: "absolute", top: 0, left: 0, bottom: 0, width: "3px",
                        background: accentColor,
                      }} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}