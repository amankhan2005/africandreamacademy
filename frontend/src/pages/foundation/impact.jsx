import { motion } from "framer-motion";

const stats = [
  "From 144 students in 2012 to over 1500 students today",
  "Advancing gender equity through education",
  "Students achieving dreams of a better future",
  "Young people prepared to transform their communities",
  "Addressing Liberia’s 52% illiteracy rate",
  "Improving academic success beyond national averages",
  "Preparing students for careers and entrepreneurship",
];

export default function Impact() {
  return (
    <section className="section">
      <div className="container-custom max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold">
            ADA's Impact at a Glance
          </h1>
          <p className="subheading">
            Empowering the Next Generation in Liberia
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-gray-700">
                {item}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-light p-8 rounded-xl2 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            More Than Education
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto">
            For many students, African Dream Academy is more than a school —
            it is a place of safety, nourishment, opportunity, and hope.
            It provides a foundation for lifelong success and personal growth.
          </p>
        </div>

      </div>
    </section>
  );
}