import Card from "../components/Card";
import { NavLink } from "react-router-dom";
import Ocean from "../assets/ej7isb68o8db1.mp4";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Floating background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          "Create a stunning website, rank on Google, and build a brand that
          people remember."
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Card />
      </motion.div>

      {/* CTA + Video */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-32 text-center space-y-12 relative z-10"
      >
        <h3 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
          View Work Now 🎞
        </h3>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our portfolio and see how we bring ideas to life through
          design and innovation.
        </p>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <NavLink
            to="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full font-semibold dark:bg-white dark:text-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Get Start!
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </NavLink>
        </motion.div>

        {/* Video */}
        <div className="relative flex justify-center">
          {/* Glow effect */}
          <div className="absolute w-[70%] h-[70%] bg-blue-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
          <motion.video
            src={Ocean}
            autoPlay
            loop
            muted
            playsInline
            className="relative mx-auto rounded-3xl shadow-2xl border border-blue-100 dark:border-slate-700 hover:scale-[1.02] transition-transform duration-500"
            whileHover={{ scale: 1.03 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
