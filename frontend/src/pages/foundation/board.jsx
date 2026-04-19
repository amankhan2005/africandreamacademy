import { motion } from "framer-motion";

const boardMembers = [
  {
    name: "Samuel R. Enders",
    role: "Founder & Executive Director",
    image: "/images/board/enders.jpg",
  },
  {
    name: "Lydia Spinelli",
    role: "President",
    image: "/images/board/lydia.jpg",
  },
  {
    name: "Heidi Leiser",
    role: "Vice President",
    image: "/images/board/heidi.jpg",
  },
  {
    name: "Gracey Stoddard",
    role: "Vice President",
    image: "/images/board/gracey.jpg",
  },
  {
    name: "Richard D. Rippe",
    role: "Treasurer",
    image: "/images/board/rippe.jpg",
  },
  {
    name: "Jennifer Coyle",
    role: "Board Member",
    image: "/images/board/coyle.jpg",
  },
];

export default function Board() {
  return (
    <section className="section">
      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold">
            Board of Directors
          </h1>
          <p className="subheading">
            African Dream Academy Foundation Leadership
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              className="card text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-grayText text-sm mt-1">
                {member.role}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}