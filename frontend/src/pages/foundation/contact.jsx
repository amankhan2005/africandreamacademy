import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted (connect backend later)");
  };

  return (
    <section className="section">
      <div className="container-custom max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="subheading">
            Have questions or want to volunteer? Reach out to us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="card space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First Name"
                className="border p-3 rounded-lg"
                onChange={handleChange}
                required
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="border p-3 rounded-lg"
                onChange={handleChange}
                required
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full"
              onChange={handleChange}
              required
            />

            <input
              name="subject"
              placeholder="Subject"
              className="border p-3 rounded-lg w-full"
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="border p-3 rounded-lg w-full"
              onChange={handleChange}
              required
            ></textarea>

            <button className="btn-primary w-full">
              Submit
            </button>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div>
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-grayText mt-2">
                Reach out to us directly or use the form.
              </p>
            </div>

            <div className="space-y-3 text-gray-700">
              <p>📍 1617 Third Avenue, New York, NY</p>
              <p>📞 +1-888-865-5217</p>
              <p>📧 admin@africandreamacademy.info</p>
            </div>

            <div className="bg-light p-5 rounded-xl2">
              <p className="text-sm">
                We typically respond within 24–48 hours. Thank you for your interest in supporting African Dream Academy.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}