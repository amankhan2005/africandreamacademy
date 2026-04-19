import { motion } from "framer-motion";
import { useState } from "react";

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

const divisions = [
  {
    img: "/images/about/early.webp",
    label: "01",
    title: "Early Childhood Division",
    grades: "Ages 3–5 · Nursery, K-1, K-2",
    body: "Studies show early childhood education has the greatest impact — at this stage the brain is developing most rapidly. By age six, the brain is about 95% of adult size. ADA uses the Zoo-phonics Multi-sensory Language Arts Program, a kinesthetic approach to literacy through phonics and phonemic awareness. Each class has no more than 30 children with a Head teacher and an Assistant teacher.",
  },
  {
    img: "/images/about/elementary.webp",
    label: "02",
    title: "Elementary Division",
    grades: "Grades 1–6 · Lower & Upper",
    body: "ADA follows the national curriculum prescribed by the Liberian Ministry of Education, supplemented by internationally recognized programs from Harcourt, Pearson, and Scholastic. Core subjects — language arts, mathematics, science and social studies — are paired with computer, French, music, physical education, cultural dance, and art. Saturday classes prepare 6th Grade students for the West African Council Exam.",
  },
  {
    img: "/images/about/junior.webp",
    label: "03",
    title: "Junior High Division",
    grades: "Grades 7–9",
    body: "Junior High students are taught in rotational classes by over 15 specialized teachers across English, literature, vocabulary, civics, geography, history, science, and math. Students also participate in advanced-level special classes and Saturday prep sessions for the West African Council Exam.",
  },
  {
    img: "/images/about/high.webp",
    label: "04",
    title: "High School Division",
    grades: "Grades 10–12",
    body: "The High School Division offers rigorous study in English, literature, civics, geography, history, biology, chemistry, physics, and math — alongside advanced special subjects, counseling, and labs. As educators of future Liberian leaders, faculty prioritize opportunities for students to celebrate growth in independence, moving from skill acquisition to real-world application.",
  },
];

const galleryImages = Array.from({ length: 12 }, (_, i) => `/images/about/gallery/${i + 1}.webp`);

export default function About() {
  const [activeImg, setActiveImg] = useState(null);
  const [hoveredGallery, setHoveredGallery] = useState(null);

  return (
    <div style={{ fontFamily: FONT, background: P.warmWhite }}>

      {/* ── GLOBAL RESPONSIVE STYLES ── */}
      <style>{`
        .about-hero-inner { padding: 120px 2rem 96px; }
        .about-overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .about-divisions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        .about-support-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .about-gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        @media (max-width: 900px) {
          .about-overview-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-support-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-divisions-grid { grid-template-columns: 1fr; gap: 32px; }
          .about-gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
          .about-hero-inner { padding: 80px 1.25rem 64px; }
          .about-support-img-order { order: -1; }
        }
        @media (max-width: 480px) {
          .about-gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 6px; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO — crimson bg
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden" }}>

        {/* Gold top accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: `linear-gradient(to right, ${P.gold}, ${P.amber}, ${P.crimsonD})`,
        }} />

        {/* Texture orbs */}
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

        <div className="about-hero-inner" style={{ maxWidth: "80rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.05)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
              Monrovia, Liberia · Est. 2012
            </span>
            <div style={{ height: "1px", width: "36px", background: P.amber }} />
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.12)} style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 800,
            color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em",
            margin: "0 0 10px",
          }}>
            African Dream{" "}
            <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.45)`, paddingBottom: "4px", display: "inline-block" }}>
              Academy
            </span>
          </motion.h1>

          {/* Divider */}
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
            fontSize: "clamp(1rem, 1.5vw, 1.1rem)", color: "rgba(255,255,255,0.78)",
            lineHeight: 1.85, maxWidth: "680px", margin: "0 auto 48px", fontWeight: 400,
          }}>
            Founded on September 10, 2012, African Dream Academy has grown from 144 students
            into a thriving institution educating over 1,500 children across two campuses
            in Paynesville, Monrovia — providing tuition-free, world-class education from
            Nursery through Twelfth Grade.
          </motion.p>

          {/* Stat pills */}
          <motion.div {...fadeUp(0.38)} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {[
              { v: "1,500+", l: "Students" },
              { v: "2012", l: "Founded" },
              { v: "K–12", l: "Full program" },
              { v: "2", l: "Campuses" },
              { v: "149", l: "Staff members" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "14px 24px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderTop: `2px solid ${P.gold}`,
                borderRadius: "2px", textAlign: "center",
              }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: P.gold, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginTop: "5px" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          OVERVIEW — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="about-overview-grid">

            {/* Image */}
            <motion.div {...fadeUp(0)} style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", left: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(232,146,10,0.2)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(26,10,0,0.13)" }}>
                <img
                  src="/images/about/overview.webp"
                  alt="Overview of African Dream Academy"
                  style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(26,10,0,0.4) 0%, transparent 55%)",
                }} />
                <div style={{
                  position: "absolute", bottom: "20px", left: "20px",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: P.gold, boxShadow: `0 0 8px ${P.gold}` }} />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600 }}>
                    Paynesville, Monrovia
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp(0.12)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  Our School
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 800,
                color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                A School Built on{" "}
                <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                  Opportunity
                </span>
              </h2>

              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "24px" }} />

              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                African Dream Academy, Inc. is a not-for-profit Liberian corporation operating
                an early childhood, elementary, junior, and senior high school across two campuses
                in Paynesville, Monrovia, Liberia, West Africa.
              </p>
              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                The school follows the national curriculum prescribed by the Liberian Ministry
                of Education, supplemented by internationally recognized programs — equipping
                students with knowledge, discipline, and critical thinking skills needed to succeed.
              </p>
              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: 0 }}>
                African Dream Academy currently educates children from age 3 in the Nursery Class
                through the Twelfth Grade, with classes held across core academic subjects and
                enrichment programs including computer, French, music, cultural dance, and art.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ACADEMIC DIVISIONS — crimson bg
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>

        <div style={{
          position: "absolute", top: "-160px", right: "-160px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,180,41,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          {/* Header */}
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Full K–12 Program
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Academic{" "}
              <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "4px", display: "inline-block" }}>
                Divisions
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                transformOrigin: "center", height: "3px", width: "52px", borderRadius: "2px",
                background: `linear-gradient(to right, ${P.gold}, ${P.amber})`,
                margin: "0 auto",
              }}
            />
          </motion.div>

          <div className="about-divisions-grid">
            {divisions.map((d, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: `3px solid ${i % 2 === 0 ? P.gold : P.amber}`,
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={d.img}
                    alt={d.title}
                    style={{ width: "100%", height: "220px", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(26,10,0,0.55) 0%, transparent 55%)",
                  }} />
                  <div style={{
                    position: "absolute", top: "16px", right: "16px",
                    fontSize: "13px", fontWeight: 800, color: P.gold,
                    letterSpacing: "1px",
                  }}>
                    {d.label}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 28px 28px" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: P.amber, marginBottom: "8px" }}>
                    {d.grades}
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.015em" }}>
                    {d.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8, margin: 0 }}>
                    {d.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          HEALTH & SUPPORT — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="about-support-grid">

            {/* Text */}
            <motion.div {...fadeUp(0)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  Student Wellbeing
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 800,
                color: P.ink, lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                Health &{" "}
                <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                  Student Support
                </span>
              </h2>

              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "24px" }} />

              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                All students at ADA have access to free health care through a partnership with
                Haven Care, Inc. — a clinic approximately 10 minutes from the school that ADA
                has worked closely with since April 2016.
              </p>
              <p style={{ color: "rgba(26,10,0,0.6)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 32px" }}>
                In addition, all students receive daily snacks and a hot, nutritious midday
                meal while in school — ensuring every child is healthy, focused, and ready to learn.
              </p>

              {/* Feature pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {["Free Healthcare", "Daily Meals", "Nutritional Support", "Haven Care Partnership"].map((tag, i) => (
                  <span key={i} style={{
                    padding: "7px 16px",
                    background: i % 2 === 0 ? `rgba(139,26,26,0.08)` : `rgba(232,146,10,0.1)`,
                    border: `1px solid ${i % 2 === 0 ? "rgba(139,26,26,0.2)" : "rgba(232,146,10,0.25)"}`,
                    borderRadius: "2px",
                    fontSize: "12px", fontWeight: 600,
                    color: i % 2 === 0 ? P.crimson : "#7a4a00",
                    letterSpacing: "0.5px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div {...fadeUp(0.12)} className="about-support-img-order" style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", right: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(232,146,10,0.2)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(26,10,0,0.13)" }}>
                <img
                  src="/images/about/health.webp"
                  alt="Student health and support"
                  style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,0,0.35) 0%, transparent 50%)" }} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VOCATIONAL — crimson bg
      ══════════════════════════════════════ */}
      <section style={{ background: P.crimson, position: "relative", overflow: "hidden", padding: "100px 0" }}>

        <div style={{
          position: "absolute", bottom: "-140px", left: "-140px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <div className="about-support-grid">

            {/* Image */}
            <motion.div {...fadeUp(0)} style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "14px", left: "-14px",
                width: "100%", height: "100%",
                border: `2px solid rgba(240,180,41,0.25)`, borderRadius: "2px", zIndex: 0,
              }} />
              <div style={{ position: "relative", zIndex: 1, borderRadius: "2px", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.3)" }}>
                <img
                  src="/images/about/vocational.webp"
                  alt="Vocational training program"
                  style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,10,0,0.5) 0%, transparent 55%)" }} />

                {/* Floating stat */}
                <div style={{
                  position: "absolute", bottom: "24px", left: "24px",
                  background: "rgba(26,10,0,0.72)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(240,180,41,0.25)",
                  borderLeft: `3px solid ${P.gold}`,
                  padding: "14px 20px", borderRadius: "2px",
                }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: P.gold, letterSpacing: "-0.03em", lineHeight: 1 }}>1,500+</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, marginTop: "5px" }}>
                    Women Trained
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp(0.12)}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: P.amber }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                  Community Empowerment
                </span>
              </div>

              <h2 style={{
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 800,
                color: "#fff", lineHeight: 1.2, letterSpacing: "-0.025em", margin: "0 0 16px",
              }}>
                Vocational{" "}
                <span style={{ color: P.gold, borderBottom: `3px solid rgba(240,180,41,0.4)`, paddingBottom: "3px", display: "inline-block" }}>
                  Training Program
                </span>
              </h2>

              <div style={{ height: "3px", width: "52px", borderRadius: "2px", background: `linear-gradient(to right, ${P.gold}, ${P.amber})`, marginBottom: "24px" }} />

              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 16px" }}>
                A vocational school was created for mothers of ADA students in 2017 to teach
                practical skills that strengthen families and communities. In 2020, fathers
                were added to the program as well.
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.85, margin: "0 0 28px" }}>
                Over 1,500 women have been trained. Currently, approximately 500 women and
                60 men are enrolled in classes held at the end of the school day and on Saturdays.
              </p>

              {/* Skills grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                {["Tailoring", "Carpentry", "Computer Skills", "Catering", "Beauty Care", "Soap-Making", "Hair Dressing", "Interior Design", "Plumbing & Masonry"].map((skill, i) => (
                  <div key={i} style={{
                    padding: "9px 12px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "2px",
                    fontSize: "11px", fontWeight: 600,
                    color: "rgba(255,255,255,0.75)",
                    textAlign: "center",
                    letterSpacing: "0.3px",
                  }}>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY — warm white
      ══════════════════════════════════════ */}
      <section style={{ background: P.warmWhite, padding: "100px 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>

          {/* Header */}
          <motion.div {...fadeUp(0)} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: P.amber }}>
                Photo Gallery
              </span>
              <div style={{ height: "1px", width: "36px", background: P.amber }} />
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800,
              color: P.ink, lineHeight: 1.1, letterSpacing: "-0.025em", margin: "0 0 16px",
            }}>
              Life at African Dream{" "}
              <span style={{ color: P.crimson, borderBottom: `3px solid ${P.gold}`, paddingBottom: "3px", display: "inline-block" }}>
                Academy
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

          {/* Gallery grid */}
          <div className="about-gallery-grid">
            {galleryImages.map((src, i) => {
              // Vary heights for visual rhythm
              const tall = [0, 5, 6, 11].includes(i);
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.04)}
                  onClick={() => setActiveImg(src)}
                  onMouseEnter={() => setHoveredGallery(i)}
                  onMouseLeave={() => setHoveredGallery(null)}
                  style={{
                    position: "relative", cursor: "pointer",
                    overflow: "hidden", borderRadius: "2px",
                    boxShadow: "0 4px 20px rgba(26,10,0,0.1)",
                    gridRow: tall ? "span 2" : "span 1",
                  }}
                >
                  <img
                    src={src}
                    alt={`Academy life ${i + 1}`}
                    style={{
                      width: "100%",
                      height: tall ? "100%" : "200px",
                      objectFit: "cover", display: "block",
                      transition: "transform 0.45s ease",
                      transform: hoveredGallery === i ? "scale(1.06)" : "scale(1)",
                      minHeight: tall ? "412px" : "200px",
                    }}
                  />

                  {/* Hover overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(to top, rgba(139,26,26,0.75) 0%, rgba(139,26,26,0.1) 60%, transparent 100%)`,
                    opacity: hoveredGallery === i ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    display: "flex", alignItems: "flex-end", padding: "16px",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                      View
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
                    background: `linear-gradient(to right, ${P.crimson}, ${P.gold})`,
                    transform: hoveredGallery === i ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left", transition: "transform 0.3s ease",
                  }} />

                  {/* Number badge */}
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "rgba(26,10,0,0.55)",
                    border: `1px solid rgba(240,180,41,0.35)`,
                    borderRadius: "2px", padding: "3px 8px",
                    fontSize: "10px", fontWeight: 700, color: P.gold,
                    letterSpacing: "1px",
                    opacity: hoveredGallery === i ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          LIGHTBOX MODAL
      ══════════════════════════════════════ */}
      {activeImg && (
        <motion.div
          onClick={() => setActiveImg(null)}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(26,10,0,0.94)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.28 }}
            onClick={e => e.stopPropagation()}
            style={{
              padding: "4px",
              background: `linear-gradient(135deg, ${P.gold}, ${P.crimson})`,
              borderRadius: "3px",
            }}
          >
            <img
              src={activeImg} alt="Gallery"
              style={{ maxHeight: "85vh", maxWidth: "88vw", objectFit: "contain", display: "block", borderRadius: "1px" }}
            />
          </motion.div>
          <button
            onClick={() => setActiveImg(null)}
            style={{
              position: "absolute", top: "24px", right: "28px",
              background: "none", border: `1px solid rgba(240,180,41,0.4)`,
              borderRadius: "50%", width: "44px", height: "44px",
              color: P.gold, fontSize: "24px", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = P.gold; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)"; e.currentTarget.style.color = P.gold; }}
          >
            ×
          </button>
        </motion.div>
      )}

    </div>
  );
}