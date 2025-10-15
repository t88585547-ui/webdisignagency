import { NavLink } from "react-router-dom";

export default function Card() {
  const items = [
    {
      id: 1,
      title: "SEO Optimization",
      more: "Optimize your website to rank higher on Google and attract organic traffic.",
      img: "https://www.borntodev.com/wp-content/uploads/2022/06/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-_7_.webp",
    },
    {
      id: 2,
      title: "Web Design",
      more: "Design modern, responsive, and user-friendly websites for your brand.",
      img: "https://careertraining.utep.edu/common/images/1/16890/learn-web-design.jpg",
    },
    {
      id: 3,
      title: "Branding Strategy",
      more: "Build a strong and memorable brand identity that stands out from competitors.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6-qFhhT5MoaRi-IOrIs8FE9LF-dNwA8zLQ&s",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">
              {item.more}
            </p>
            <NavLink
              to="/contact"
              className="mt-6 inline-block text-center bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all dark:bg-white dark:text-blue-600"
            >
              Contact
            </NavLink>
          </div>
        </div>
      ))}
    </section>
  );
}
