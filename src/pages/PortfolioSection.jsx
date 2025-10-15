import PortfolioCard from "../components/PortfolioCard";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Floating Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 opacity-10 blur-3xl rounded-full animate-pulse"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          My <span className="text-blue-600">Portfolio</span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A curated selection of my creative work — crafted with precision, modern aesthetics, and performance in mind.
        </p>
      </motion.div>

      {/* Portfolio Cards */}
      <PortfolioCard />

      {/* Decorative Wave or Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-100 dark:from-slate-900 opacity-50 blur-2xl"></div>
    </section>
  );
}
