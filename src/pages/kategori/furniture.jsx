import { Link } from "react-router-dom";

export default function FurniturePage() {
  const furnitureProducts = [
    { id: 3, name: "Sofa Minimalis", price: "Rp 40.000 / hari", image: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/1.-sectional-sofa.jpg" },
    { id: 4, name: "Meja Kayu Jati", price: "Rp 70.000 / hari", image: "https://jeparawood.com/wp-content/uploads/2021/03/meja-makan-mewah-kayu.jpg" },
    { id: 5, name: "Kursi Santai", price: "Rp 50.000 / hari", image: "https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/10168526_1.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Furniture</h1>

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