import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Sewa Alat Rumah Tangga <span className="text-indigo-600">Mudah & Cepat</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Dari mesin cuci, kompor, hingga peralatan dapur. Semua bisa kamu sewa dengan harga terjangkau.
        </p>
        <div className="mt-6">
          <a
            href="/produk"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition inline-block"
          >
            Lihat Produk
          </a>
        </div>
      </section>

      {/* Kategori */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Kategori Populer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <span className="text-4xl">🛋️</span>
            <p className="mt-2 font-medium">Furniture</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <span className="text-4xl">🍳</span>
            <p className="mt-2 font-medium">Dapur</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <span className="text-4xl">🧺</span>
            <p className="mt-2 font-medium">Laundry</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
            <span className="text-4xl">📺</span>
            <p className="mt-2 font-medium">Elektronik</p>
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-16">
         <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Produk Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img
              src="https://image.made-in-china.com/2f0j00WkicjLSGZzql/5kg-Mini-Washing-Machine-Small-Washing-Machine-for-Home-Hotel-Use.webp"
              alt="Mesin Cuci"
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Mesin Cuci</h3>
              <p className="text-gray-600">Rp 50.000 / hari</p>
              <Link
                to="/produk/1"
                className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Sewa Sekarang
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img src="https://cdn.polytron.co.id/public-assets/polytroncoid/2024/04/PRS-451-Y-PERS-2.jpg" alt="Kulkas" className="w-full h-48 object-contain" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Kulkas 2 Pintu</h3>
              <p className="text-gray-600">Rp 75.000 / hari</p>
              <Link
                to="/produk/2"
                className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Sewa Sekarang
              </Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img src="https://vinotiliving.com/cdn/shop/products/Simplicity_Sofa_3_seat_vierra_gray_web.jpg?v=1645771769" alt="Sofa" className="w-full h-48 object-contain" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Sofa Minimalis</h3>
              <p className="text-gray-600">Rp 40.000 / hari</p>
              <Link
                to="/produk/3"
                className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Sewa Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}