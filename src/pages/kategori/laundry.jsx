export default function LaundryPage() {
  const furnitureProducts = [
    { id: 9, name: "Setrika Boiler", price: "Rp 2.500.000", image: "https://hakatori.com/wp-content/uploads/2020/12/IMG_1372-removebg-preview.png" },
    { id: 10, name: "Mesin Pengering", price: "Rp 1.200.000", image: "https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/10486090_2.jpg" },
    { id: 11, name: "Mesin Cuci", price: "Rp 750.000", image: "https://images.tokopedia.net/img/KRMmCm/2024/7/3/bf840a10-2ad6-4f52-8e2f-1532fa85f38c.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Laundry</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {furnitureProducts.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-contain" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
              <a
                href={`/produk/${item.id}`}
                className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Lihat Produk
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}