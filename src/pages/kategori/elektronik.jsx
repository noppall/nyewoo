export default function ElektronikPage() {
  const furnitureProducts = [
    { id: 12, name: "Sound System", price: "Rp 2.500.000", image: "https://cdn.medcom.id/dynamic/content/2025/07/30/1771403/oNcSnHw5OY.jpg?w=640" },
    { id: 13, name: "Proyektor", price: "Rp 1.200.000", image: "https://mediaserver.goepson.com/ImConvServlet/imconv/ef729001e658131b144236a21754917989eb41fb/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=E01_b_No.3" },
    { id: 14, name: "Drone", price: "Rp 750.000", image: "https://img.id.my-best.com/contents/dfa30396f37dd2c1bd250e8c23d7c4c4.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=1200&h=900&fit=crop&s=6809ed5557e643fb509d92fb2b1aeaab" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Elektronik</h1>

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