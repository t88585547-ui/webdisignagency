import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! ✅");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 py-20 px-6 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      {/* ...เนื้อหาเดิม... */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-white dark:bg-slate-900 shadow-2xl rounded-3xl p-10 border border-blue-100 dark:border-slate-700"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white flex justify-center items-center gap-2">
            <FiMail className="text-blue-600" />
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-3">
            We'd love to hear from you! Fill out the form or reach us on social
            media 🌎
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-5 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <FiPhone className="text-blue-600 text-xl" />
                <span>+66 888-555-123</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-blue-600 text-xl" />
                <span>contact@yourwebsite.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-blue-600 text-xl" />
                <span>Bangkok, Thailand</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-10 flex gap-5 text-2xl justify-start md:justify-start">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 transition-all duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:text-blue-600 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-blue-700 hover:text-blue-800 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:border-slate-600 dark:text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:border-slate-600 dark:text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows="5"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:border-slate-600 dark:text-white transition-all resize-none"
              ></textarea>
            </div>

            <div className="text-center md:text-right">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
