import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Makima from "../assets/tumblr_232d3f25b3b5cf39e0f5dfe7a734e340_59629050_1280.gif";

export default function PortfolioCard() {
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Website",
      readmore: "A sleek web design built with React & TailwindCSS.",
      img: Makima,
    },
    {
      id: 2,
      title: "Landing Page Concept",
      readmore: "Animated landing page focusing on smooth UX transitions.",
      img: Makima,
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      readmore: "Clean, data-driven interface for a web app.",
      img: Makima,
    },
    {
      id: 4,
      title: "eCommerce UI",
      readmore: "Elegant online store concept with brand consistency.",
      img: Makima,
    },
    {
      id: 5,
      title: "Portfolio Redesign",
      readmore: "Personal portfolio inspired by minimalist aesthetics.",
      img: Makima,
    },
    {
      id: 6,
      title: "Creative Branding",
      readmore: "Logo and brand identity exploration for startups.",
      img: Makima,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
    >
      {portfolioItems.map((item) => (
        <motion.div
          key={item.id}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 group hover:shadow-2xl transition-all duration-300"
        >
          <div className="overflow-hidden">
            <img
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              src={item.img}
              alt={item.title}
            />
          </div>

          <div className="p-6">
            <h5 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {item.title}
            </h5>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {item.readmore}
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline hover:gap-3 transition-all"
            >
              Contact Now →
            </NavLink>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
