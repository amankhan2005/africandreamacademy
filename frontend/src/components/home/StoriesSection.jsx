import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const P = {
  crimson:  "#8B1A1A",
  crimsonD: "#6B1212",
  amber:    "#E8920A",
  gold:     "#F0B429",
  ink:      "#1A0A00",
  warmWhite: "#FFFBF5",
};

const FONT = "'Inter', system-ui, sans-serif";

export default function StoriesSection() {
  const [open, setOpen] = useState(false);

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
        .st-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 72px;
          align-items: center;
        }
        .st-img {
          height: 400px;
        }
        .st-frame {
          top: 14px;
          right: -14px;
        }
        .st-body {
          max-width: 440px;
        }
        .st-video {
          width: 90%;
          max-width: 900px;
          height: 500px;
        }
        @media (max-width: 768px) {
          .st-grid {
            grid-template-columns: 1fr;
            padding: 64px 20px;
            gap: 48px;
          }
          .st-img {
            height: 260px;
          }
          .st-frame {
            top: 10px;
            right: -10px;
          }
          .st-thumb-col {
            order: -1;
          }
          .st-body {
            max-width: 100%;
          }
          .st-video {
            width: 95%;
            height: auto;
            aspect-ratio: 16 / 9;
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
      <div className="st-grid">

        {/* ── TEXT SIDE ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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
              Student Voices
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.14 }}
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: P.ink,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "18px",
            }}
          >
            Stories From{" "}
            <span style={{
              color: P.crimson,
              borderBottom: `3px solid ${P.gold}`,
              paddingBottom: "2px",
            }}>
              ADA Students
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
            className="st-body"
            style={{
              color: "rgba(26,10,0,0.55)",
              fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
              lineHeight: 1.85,
              fontWeight: 400,
              marginBottom: "36px",
            }}
          >
            Watch two ADA students share their experiences and how a
            tuition-free, world-class education is transforming their
            lives and shaping their futures in Liberia.
          </motion.p>

          {/* Quote accent */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.36 }}
            style={{
              borderLeft: `3px solid ${P.gold}`,
              paddingLeft: "18px",
              marginBottom: "36px",
            }}
          >
            <p style={{
              fontSize: "0.95rem",
              color: "rgba(26,10,0,0.6)",
              fontStyle: "italic",
              lineHeight: 1.75,
              margin: 0,
            }}>
              "Education is the most powerful weapon you can use to change the world."
            </p>
            <p style={{
              fontSize: "11px",
              color: P.amber,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginTop: "8px",
            }}>
              — Nelson Mandela
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.42 }}
            whileHover={{ y: -2 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 32px",
              background: P.crimson,
              color: "#fff",
              fontFamily: FONT,
              fontWeight: 700, fontSize: "13px",
              letterSpacing: "0.08em", textTransform: "uppercase",
              border: "none", borderRadius: "2px", cursor: "pointer",
              boxShadow: "0 4px 24px rgba(139,26,26,0.3)",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = P.crimsonD; }}
            onMouseLeave={e => { e.currentTarget.style.background = P.crimson; }}
          >
            <span style={{
              width: "26px", height: "26px",
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "9px", paddingLeft: "2px",
            }}>
              ▶
            </span>
            Watch Stories
          </motion.button>
        </motion.div>

        {/* ── VIDEO THUMBNAIL SIDE ── */}
        <motion.div
          className="st-thumb-col"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          {/* Gold frame offset */}
          <div
            className="st-frame"
            style={{
              position: "absolute",
              width: "100%", height: "100%",
              border: `2px solid rgba(240,180,41,0.25)`,
              borderRadius: "2px",
              zIndex: 0,
            }}
          />

          {/* Thumbnail */}
          <div
            onClick={() => setOpen(true)}
            style={{
              position: "relative", zIndex: 1,
              cursor: "pointer", borderRadius: "2px",
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(26,10,0,0.18)",
            }}
          >
            <img
              src="/images/home/stories.png"
              alt="Student Stories"
              className="st-img"
              style={{
                width: "100%",
                objectFit: "cover", display: "block",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
            />

            {/* Dark overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(26,10,0,0.55) 0%, rgba(26,10,0,0.15) 60%, transparent 100%)",
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
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
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
                letterSpacing: "2px", textTransform: "uppercase",
                fontWeight: 600,
              }}>
                Student Stories · Monrovia, Liberia
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(26,10,0,0.92)",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 50,
            }}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="st-video"
              style={{
                position: "relative",
                padding: "4px",
                background: `linear-gradient(135deg, ${P.gold}, ${P.crimson})`,
                borderRadius: "3px",
              }}
            >
              <video
                controls
                autoPlay
                muted
                playsInline
                poster="/images/home/stories.png"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "1px",
                }}
              >
                <source src="/images/stories/ada.mp4" type="video/mp4" />
              </video>
            </motion.div>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute", top: "24px", right: "28px",
                background: "none",
                border: "1px solid rgba(240,180,41,0.4)",
                borderRadius: "50%",
                width: "44px", height: "44px",
                color: P.gold, fontSize: "24px",
                cursor: "pointer",
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