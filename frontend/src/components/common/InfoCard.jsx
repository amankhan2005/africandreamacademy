import { motion } from "framer-motion";

export default function InfoCard({
  title,
  description,
  buttonText,
  image,
  reverse = false,
}) {
  return (
    <section className="section">
      <div
        className={`container-custom grid md:grid-cols-2 gap-10 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-[350px] object-cover rounded-xl2 shadow-soft"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading">{title}</h2>

          <p className="subheading">
            {description}
          </p>

          {buttonText && (
            <button className="btn-primary mt-5">
              {buttonText}
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
}