import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  { image: "/images/hero/hero1.webp", label: "Liberia, West Africa" },
  { image: "/images/hero/hero2.webp", label: "African Dream Academy" },
  { image: "/images/hero/hero3.png", label: "Changing Lives Through Education" },
];

/* ── Logo-derived palette ── */
const P = {
  crimson:  "#8B1A1A",   /* Africa silhouette — deep red */
  crimsonD: "#6B1212",
  amber:    "#E8920A",   /* sun circle — warm orange */
  gold:     "#F0B429",   /* outer glow — bright gold */
  ink:      "#1A0A00",   /* logotype text — near-black */
};

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh", fontFamily: "'Inter', system-ui, sans-serif" }}
    >

      {/* ── Background slideshow ── */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={slides[index].image}
            src={slides[index].image}
            alt="Children at African Dream Academy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Deep left overlay — text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(26,10,0,0.88) 0%, rgba(26,10,0,0.60) 50%, rgba(26,10,0,0.15) 100%)",
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,10,0,0.72) 0%, rgba(26,10,0,0.0) 45%)",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-14 py-16">
          <div className="max-w-[640px]">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="flex items-center gap-3 mb-7"
            >
              <div
                className="h-px w-10 shrink-0"
                style={{ background: P.amber }}
              />
              <span
                className="text-[11px] font-semibold uppercase tracking-[3.5px]"
                style={{ color: P.amber }}
              >
                Many Dreams · One Hope
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white font-bold leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Every Child Deserves
              <br />
              <span style={{ color: P.gold }}>a Dream Worth Chasing</span>
            </motion.h1>

            {/* Divider accent */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="origin-left mb-7"
              style={{
                height: "3px",
                width: "56px",
                borderRadius: "2px",
                background: `linear-gradient(to right, ${P.crimson}, ${P.amber})`,
              }}
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45 }}
              className="leading-[1.8] mb-10 font-light"
              style={{
                fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)",
                color: "rgba(255,255,255,0.72)",
                maxWidth: "500px",
              }}
            >
              Liberia has one of the world's highest illiteracy rates. We believe
              education is the most powerful tool to break that cycle — giving
              every child a tuition-free, world-class education and a brighter future.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58 }}
              className="flex flex-wrap gap-3"
            >
              {/* Primary */}
              <Link
                to="/foundation/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: P.crimson,
                  boxShadow: `0 4px 22px rgba(139,26,26,0.5)`,
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = P.crimsonD; }}
                onMouseLeave={e => { e.currentTarget.style.background = P.crimson; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21S3 14.5 3 8.5a4.5 4.5 0 019-1 4.5 4.5 0 019 1C21 14.5 12 21 12 21z"/>
                </svg>
                Support ADA Today
              </Link>

              {/* Secondary */}
              <Link
                to="/academy/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-medium text-white transition-all duration-200 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.22)",
                  letterSpacing: "0.02em",
                }}
              >
                Our Story
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 w-full">

        {/* Thin amber rule */}
        <div
          className="w-full h-px"
          style={{ background: "rgba(232,146,10,0.18)" }}
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-14 py-5 flex items-center justify-between">

          {/* Slide dots */}
          <div className="flex items-center gap-[7px]">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-400"
                style={{
                  width:      i === index ? "22px" : "6px",
                  height:     "6px",
                  background: i === index ? P.gold : "rgba(255,255,255,0.28)",
                  border:     "none",
                  padding:    0,
                  cursor:     "pointer",
                }}
              />
            ))}
          </div>

          {/* Location */}
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[2px] font-medium"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill={P.amber}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {slides[index].label}
            </motion.span>
          </AnimatePresence>

        </div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-20 right-10 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] uppercase tracking-[3px] font-medium"
          style={{ color: "rgba(255,255,255,0.25)", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px origin-top"
          style={{ height: "40px", background: `linear-gradient(to bottom, ${P.amber}, transparent)` }}
        />
      </motion.div>

    </section>
  );
}