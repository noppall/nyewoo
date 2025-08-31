import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  // helper biar tiap klik navigasi scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-indigo-600">NyewoO</h1>
            <p className="mt-2 text-sm text-gray-600">
              Solusi mudah sewa alat rumah tangga. Praktis, cepat, dan terpercaya.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Navigasi</h2>
            <div className="flex flex-col space-y-2 text-gray-600">
              <Link
                to="/"
                onClick={scrollToTop}
                className="hover:text-indigo-600 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/produk"
                onClick={scrollToTop}
                className="hover:text-indigo-600 transition-colors"
              >
                Produk
              </Link>
              <Link
                to="/tentang"
                onClick={scrollToTop}
                className="hover:text-indigo-600 transition-colors"
              >
                Tentang
              </Link>
              <Link
                to="/kontak"
                onClick={scrollToTop}
                className="hover:text-indigo-600 transition-colors"
              >
                Kontak
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Ikuti Kami</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NyewoO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}