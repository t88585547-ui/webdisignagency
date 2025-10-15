import { useState } from "react";
import { NavLink } from "react-router-dom";
import Togglemode from "./Togglebtn";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // ใช้ heroicons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Portfolio" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className=" sticky top-0 bg-blue-50  shadow-md z-50 dark:bg-gray-900">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2 ">
          {/* โลโก้ */}
          <NavLink to="/" className="flex items-center gap-x-2">
            <img
              src="https://i.pinimg.com/originals/46/30/7e/46307ede647b265487a059fa95776eba.gif"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-xl font-semibold text-blue-500 dark:text-white">
              BrightWeb
            </p>
          </NavLink>

          {/* เมนู Desktop */}
          <ul className="hidden md:flex gap-x-12 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className="dark:text-white hover:text-indigo-500 transition-colors duration-200"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ปุ่มโหมดสว่าง/มืด */}
          <div className="flex items-center gap-x-2">
            <Togglemode />

            {/* ปุ่ม burger (มือถือ) */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-500"
              aria-label="เปิดเมนู"
            >
              <Bars3Icon className="h-7 w-7 text-black dark:text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar (มือถือ) */}
      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-blue-100 dark:bg-gray-800 text-black dark:text-white p-5 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ส่วนหัวเมนู */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-x-2">
            <img
              src="https://i.pinimg.com/originals/46/30/7e/46307ede647b265487a059fa95776eba.gif"
              alt="Logo"
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            <p className="text-xl font-semibold">BrightWeb</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-red-400/30 transition-colors duration-200"
            aria-label="ปิดเมนู"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
        </div>

        <hr className="border-gray-400 dark:border-white/40 mb-6" />

        {/* รายการเมนู */}
        <ul className="space-y-4 text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block hover:text-indigo-500 transition-colors duration-200"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay มืดคลิกเพื่อปิด */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        ></div>
      )}
    </>
  );
}
