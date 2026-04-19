import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
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

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const index = blogs.findIndex((b) => b.slug === slug);
  const blog = blogs[index];

  if (!blog) {
    return (
      <div style={{ fontFamily: FONT, background: P.warmWhite, padding: "120px 2rem", textAlign: "center" }}>
        <p style={{ color: "rgba(26,10,0,0.5)", fontSize: "1.1rem" }}>Blog post not found.</p>
        <button
          onClick={() => navigate("/academy/blog")}
          style={{
            marginTop: "24px", padding: "12px 32px",
            background: P.crimson, color: "#fff",
            border: "none", borderRadius: "2px",
            fontWeight: 700, fontSize: "13px",
            letterSpacing: "1.5px", textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const prevBlog = blogs[index - 1];
  const nextBlog = blogs[index + 1];

  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      <style>{`
        .blogd-hero-inner { padding: 100px 2rem 0; }
        .blogd-body { max-width: 48rem; margin: 0 auto; padding: 0 2rem 100px; }

        @media (max-width: 900px) {
          .blogd-hero-inner { padding: 72px 1.25rem 0; }
          .blogd-body { padding: 0 1.25rem 80px; }
        }
        @media (max-width: 480px) {
          .blogd-hero-inner { padding: 56px 1rem 0; }
          .blogd-body { padding: 0 1rem 64px; }
        }

        .blogd-nav-btn {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none;
          color: ${P.crimson};
          transition: opacity 0.2s;
        }
        .blogd-nav-btn:hover { opacity: 0.72; }
        .blogd-back-btn {
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(26,10,0,0.4);
          background: none; border: 1px solid rgba(26,10,0,0.15);
          border-radius: 2px; padding: 9px 20px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .blogd-back-btn:hover {
          border-color: rgba(139,26,26,0.4);
          color: ${P.crimson};
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO IMAGE + META — crimson band then image
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden" }}>

        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(to right, ${P.gold}, ${P.amber}, ${P.crimsonD})`,
        }} />
        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div className="blogd-hero-inner" style={{ maxWidth: "56rem", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Back breadcrumb */}
          <motion.div {...fadeUp(0)} style={{ marginBottom: "32px" }}>
            <button
              onClick={() => navigate("/academy/blog")}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "none", border: "none", cursor: "pointer", padding: 0,
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "2px", textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = P.gold}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
            >
              <span style={{ fontSize: "14px" }}>←</span> Blog
            </button>
          </motion.div>

          {/* Date */}
          <motion.div {...fadeUp(0.06)} style={{ marginBottom: "14px" }}>
            <span style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "rgba(255,255,255,0.08)",
              border: `1px solid ${P.amber}`,
              borderRadius: "2px",
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "2.5px", textTransform: "uppercase",
              color: P.amber,
            }}>
              {blog.date}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(1.7rem, 4vw, 2.8rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.2, letterSpacing: "-0.025em",
            margin: "0 0 40px",
          }}>
            {blog.title}
          </motion.h1>

          {/* Full-bleed image — increased height */}
          <motion.div
            {...fadeUp(0.18)}
            style={{
              borderRadius: "2px 2px 0 0", overflow: "hidden",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%", height: "clamp(320px, 55vw, 600px)",
                objectFit: "cover", display: "block",
              }}
            />
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          ARTICLE BODY — warm white
      ══════════════════════════════════════ */}
      <div className="blogd-body">

        {/* Accent rule */}
        <div style={{
          height: "3px", width: "52px", borderRadius: "2px",
          background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
          margin: "48px 0 36px",
        }} />

        {/* Content */}
        <motion.div {...fadeUp(0.05)}>
          {blog.content.split("\n\n").map((para, i) => (
            <p key={i} style={{
              fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
              color: "rgba(26,10,0,0.72)",
              lineHeight: 1.9,
              margin: "0 0 1.4em",
            }}>
              {para}
            </p>
          ))}
        </motion.div>

        {/* ── NAVIGATION ── */}
        <div style={{
          marginTop: "64px",
          paddingTop: "28px",
          borderTop: "1px solid rgba(139,26,26,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}>

          {/* Previous */}
          <div style={{ minWidth: 0 }}>
            {prevBlog ? (
              <Link to={`/blog/${prevBlog.slug}`} className="blogd-nav-btn">
                <span style={{ fontSize: "14px" }}>←</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "160px" }}>
                  Previous
                </span>
              </Link>
            ) : <div />}
          </div>

          {/* Back to Blog */}
          <button
            onClick={() => navigate("/academy/blog")}
            className="blogd-back-btn"
          >
            All Posts
          </button>

          {/* Next */}
          <div style={{ minWidth: 0 }}>
            {nextBlog ? (
              <Link to={`/blog/${nextBlog.slug}`} className="blogd-nav-btn" style={{ justifyContent: "flex-end" }}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "160px" }}>
                  Next
                </span>
                <span style={{ fontSize: "14px" }}>→</span>
              </Link>
            ) : <div />}
          </div>

        </div>

        {/* Related posts */}
        {(prevBlog || nextBlog) && (
          <motion.div {...fadeUp(0.1)} style={{ marginTop: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <div style={{ height: "1px", flex: 1, background: "rgba(139,26,26,0.1)" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: P.amber }}>
                More Posts
              </span>
              <div style={{ height: "1px", flex: 1, background: "rgba(139,26,26,0.1)" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[prevBlog, nextBlog].filter(Boolean).map((related, i) => (
                <Link key={related.slug} to={`/blog/${related.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "#fff",
                    border: "1px solid rgba(139,26,26,0.1)",
                    borderLeft: `3px solid ${i === 0 ? P.crimson : P.amber}`,
                    borderRadius: "2px",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(26,10,0,0.06)",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,10,0,0.12)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 12px rgba(26,10,0,0.06)"}
                  >
                    <img
                      src={related.image}
                      alt={related.title}
                      style={{ width: "100%", height: "100px", objectFit: "cover", display: "block" }}
                    />
                    <div style={{ padding: "14px 16px" }}>
                      <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: P.amber, marginBottom: "6px" }}>
                        {related.date}
                      </div>
                      <p style={{ fontSize: "0.82rem", fontWeight: 800, color: P.ink, margin: 0, lineHeight: 1.4 }}>
                        {related.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

      </div>

    </div>
  );
}