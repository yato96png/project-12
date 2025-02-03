import { useState } from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      } transition-all duration-500`}
    >
      <motion.button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold mb-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Переключить тему
      </motion.button>

      <motion.div
        className="p-6 max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">
          Привет, я [Ваше Имя]!
        </h1>
        <p className="text-lg">
          Добро пожаловать в мой блог. Здесь я делюсь своими мыслями, проектами и идеями.
        </p>
      </motion.div>
    </div>
  );
}
