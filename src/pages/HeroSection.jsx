import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Ocean from "../assets/ej7isb68o8db1.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 วิดีโอพื้นหลัง */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Ocean}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌈 ชั้น overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-black/80"></div>

      {/* 💬 เนื้อหาหลัก */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center text-white px-6 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Ready to <span className="text-blue-400">Elevate</span> Your Brand
          Online?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-lg md:text-2xl text-gray-200 mb-10"
        >
          Let’s create something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <NavLink
            to="/services"
            className="text-xl md:text-2xl px-10 py-4 bg-blue-600 rounded-full font-semibold inline-block
            shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:bg-blue-500 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </NavLink>
        </motion.div>
      </motion.div>

      {/* ⬇️ Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm tracking-widest"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="opacity-80">Scroll Down</span>
          <div className="w-[1px] h-6 bg-white/70"></div>
        </div>
      </motion.div>
    </section>
  );
}
