export default function KitchenPage() {
  const furnitureProducts = [
    { id: 6, name: "Kompor Portable", price: "Rp 2.500.000", image: "https://static.retailworldvn.com/Products/Images/12226/325027/kompor-gas-portable-niko-nk-268c-violet-1.jpg" },
    { id: 7, name: "Rice Cooker", price: "Rp 1.200.000", image: "https://image.kenken.id/s3/productimages/webp/co274051/p1469874/w600-h600/88944c0d-ffb1-4ed4-a7f8-1d24cca33c99.jpg" },
    { id: 8, name: "Food Processor", price: "Rp 750.000", image: "https://images-cdn.ubuy.co.id/67c06af8285c1318fd2fc138-ninja-professional-food-processor-850.jpg" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dapur</h1>

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