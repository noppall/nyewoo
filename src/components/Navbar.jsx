import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto close menu tiap pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">NyewoO</div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/produk" className="hover:text-indigo-600">Produk</Link>
            <Link to="/tentang" className="hover:text-indigo-600">Tentang</Link>
            <Link to="/kontak" className="hover:text-indigo-600">Kontak</Link>
          </div>

          {/* Button Desktop */}
          <div className="hidden md:flex">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Login
            </button>
          </div>

          {/* Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
              <Link to="/" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/produk" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Produk</Link>
              <Link to="/tentang" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Tentang</Link>
              <Link to="/kontak" className="hover:text-indigo-600" onClick={() => setIsOpen(false)}>Kontak</Link>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mt-2">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}