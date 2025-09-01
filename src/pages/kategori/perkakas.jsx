import { Link } from "react-router-dom";

export default function PerkakasPage() {
  const furnitureProducts = [
    { id: 15, name: "Chainsaw", price: "Rp 70.000 / hari", image: "https://indokita.co.id/wp-content/uploads/2024/01/JPEG-1920x1440_MS-MS182-EU-SR-001.jpg" },
    { id: 16, name: "Gerinda", price: "Rp 20.000 / hari", image: "https://tehniq.com/cdn/shop/products/KYUHODiscGrinderK107R_800x_crop_center.jpg?v=1618199841" },
    { id: 17, name: "Tangga Lipat", price: "Rp 30.000 / hari", image: "https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/10542870_1.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Perkakas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {furnitureProducts.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
              <Link
                to={`/produk/${item.id}`}
                className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Lihat Produk
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}