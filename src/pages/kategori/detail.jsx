// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();

  // data produk
  const products = [
    {
      id: 1,
      name: "Mesin Cuci LG",
      price: "Rp 50.000 / hari",
      image: "https://image.made-in-china.com/2f0j00WkicjLSGZzql/5kg-Mini-Washing-Machine-Small-Washing-Machine-for-Home-Hotel-Use.webp",
      description: "Mesin cuci LG dengan teknologi terbaru untuk hasil cucian yang bersih dan efisien.",
      specification: [
        "Kapasitas: 7kg",
        "Tipe: Front Load",
        "Video 4K UHD",
      ]
    },
    {
      id: 2,
      name: "Kulkas 2 Pintu Samsung",
      price: "Rp 75.000 / hari",
      image: "https://cdn.polytron.co.id/public-assets/polytroncoid/2024/04/PRS-451-Y-PERS-2.jpg",
      description: "Kulkas Samsung dengan desain modern dan fitur pendinginan cepat.",
      specification: [
        "Kapasitas: 300L",
        "Tipe: 2 Pintu",
        "Energy Star Rated",
      ]
    },
    {
      id: 3,
      name: "Sofa Minimalis",
      price: "Rp 40.000 / hari",
      image: "https://vinotiliving.com/cdn/shop/products/Simplicity_Sofa_3_seat_vierra_gray_web.jpg?v=1645771769",
      description: "Sofa minimalis dengan desain elegan, cocok untuk ruang tamu modern.",
      specification: [
        "Material: Kain dan Kayu",
        "Warna: Abu-abu",
        "Dimensi: 200cm x 80cm x 75cm",
      ]
    },
    {
      id: 4,
      name: "Meja Kayu Jati",
      price: "Rp 1.200.000",
      image: "https://jeparawood.com/wp-content/uploads/2021/03/meja-makan-mewah-kayu.jpg",
      description: "Meja makan dari kayu jati berkualitas tinggi, tahan lama dan elegan.",
      specification: [
        "Material: Kayu Jati",
        "Warna: Coklat Tua",
        "Dimensi: 150cm x 90cm x 75cm",
      ]
    },
    {
      id: 5,
      name: "Kursi Santai",
      price: "Rp 750.000",
      image: "https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/10168526_1.jpg",
      description: "Kursi santai dengan desain ergonomis untuk kenyamanan maksimal.",
      specification: [
        "Material: Rotan Sintetis",
        "Warna: Coklat Muda",
        "Dimensi: 70cm x 70cm x 90cm",
      ]
    },
    {
        id: 6,
        name: "Kompor Portable",
        price: "Rp 2.500.000",
        image: "https://static.retailworldvn.com/Products/Images/12226/325027/kompor-gas-portable-niko-nk-268c-violet-1.jpg",
        description: "Kompor portable dengan desain compact, mudah dibawa kemana saja.",
        specification: [
            "Tipe: Gas Portable",
            "Warna: Ungu",
            "Dimensi: 30cm x 25cm x 10cm",
        ]
        },
        {
        id: 7,
        name: "Rice Cooker",
        price: "Rp 1.200.000",
        image: "https://image.kenken.id/s3/productimages/webp/co274051/p1469874/w600-h600/88944c0d-ffb1-4ed4-a7f8-1d24cca33c99.jpg",
        description: "Rice cooker dengan teknologi penghangat otomatis untuk nasi yang selalu hangat.",
        specification: [
            "Kapasitas: 1.8L",
            "Fungsi: Memasak & Menghangatkan",
            "Material: Stainless Steel",
        ]
        },
        {
        id: 8,
        name: "Food Processor",
        price: "Rp 750.000",
        image: "https://images-cdn.ubuy.co.id/67c06af8285c1318fd2fc138-ninja-professional-food-processor-850.jpg",
        description: "Food processor multifungsi untuk memudahkan persiapan masakan Anda.",
        specification: [
            "Kapasitas: 2L",
            "Daya: 800W",
            "Fungsi: Menggiling, Memotong, Mencampur",
        ]
    },
    {
        id: 9,
        name: "Setrika Boiler",
        price: "Rp 300.000",
        image: "https://hakatori.com/wp-content/uploads/2020/12/IMG_1372-removebg-preview.png",
        description: "Setrika uap dengan teknologi anti lengket untuk hasil setrika yang rapi.",
        specification: [
            "Daya: 1200W",
            "Fungsi: Uap Vertikal & Horizontal",
            "Material: Stainless Steel",
        ]
    },
    {
        id: 10,
        name: "Mesin Pengering",
        price: "Rp 1.200.000",
        image: "https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/10486090_2.jpg",
        description: "Mesin pengering dengan kapasitas besar untuk mengeringkan pakaian dengan cepat.",
        specification: [
            "Kapasitas: 8kg",
            "Tipe: Front Load",
            "Fitur: Sensor Kelembapan",
        ]
    },
    {
        id: 11,
        name: "Mesin Cuci",
        price: "Rp 750.000",
        image: "https://images.tokopedia.net/img/KRMmCm/2024/7/3/bf840a10-2ad6-4f52-8e2f-1532fa85f38c.jpg",
        description: "Mesin cuci dengan berbagai mode pencucian untuk hasil yang optimal.",
        specification: [
            "Kapasitas: 7kg",
            "Tipe: Top Load",
            "Fitur: Hemat Energi",
        ]
    },
    {
        id: 12,
        name: "Sound System",
        price: "Rp 600.000",
        image: "https://cdn.medcom.id/dynamic/content/2025/07/30/1771403/oNcSnHw5OY.jpg?w=640",
        description: "Sound system dengan kualitas suara jernih dan bass yang kuat.",
        specification: [
            "Daya: 100W",
            "Koneksi: Bluetooth & AUX",
            "Fitur: Remote Control",
        ]
    },
    {
        id: 13,
        name: "Proyektor",
        price: "Rp 1.200.000",
        image: "https://mediaserver.goepson.com/ImConvServlet/imconv/ef729001e658131b144236a21754917989eb41fb/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=E01_b_No.3",
        description: "Proyektor dengan resolusi tinggi untuk presentasi dan hiburan di rumah.",
        specification: [
            "Resolusi: 1080p",
            "Kecerahan: 3000 Lumens",
            "Koneksi: HDMI & USB",
        ]
    },
    {
        id: 14,
        name: "Drone",
        price: "Rp 750.000",
        image: "https://img.id.my-best.com/contents/dfa30396f37dd2c1bd250e8c23d7c4c4.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=1200&h=900&fit=crop&s=6809ed5557e643fb509d92fb2b1aeaab",
        description: "Drone dengan kamera HD untuk menangkap momen dari udara.",
        specification: [
            "Kamera: HD 720p",
            "Waktu Terbang: 20 Menit",
            "Jarak Kontrol: 100 Meter",
        ]
    },
    {
        id: 15,
        name: "Chainsaw",
        price: "Rp 2.500.000",
        image: "https://indokita.co.id/wp-content/uploads/2024/01/JPEG-1920x1440_MS-MS182-EU-SR-001.jpg",
        description: "Chainsaw bertenaga tinggi untuk pekerjaan pemotongan kayu yang efisien.",
        specification: [
            "Daya: 2000W",
            "Panjang Pisau: 18 Inci",
            "Fitur: Anti Getar",
        ]
    },
    {
        id: 16,
        name: "Gerinda",
        price: "Rp 1.200.000",
        image: "https://tehniq.com/cdn/shop/products/KYUHODiscGrinderK107R_800x_crop_center.jpg?v=1618199841",
        description: "Gerinda multifungsi untuk berbagai keperluan pengamplasan dan pemotongan.",
        specification: [
            "Daya: 850W",
            "Diameter Cakram: 4.5 Inci",
            "Fitur: Kecepatan Variabel",
        ]
    },
    {
        id: 17,
        name: "Tangga Lipat",
        price: "Rp 750.000",
        image: "https://cdn.ruparupa.io/fit-in/400x400/filters:format(webp)/filters:quality(90)/ruparupa-com/image/upload/Products/10542870_1.jpg",
        description: "Tangga lipat yang ringan dan mudah dibawa, cocok untuk berbagai keperluan rumah tangga.",
        specification: [
            "Material: Aluminium",
            "Tinggi Maksimal: 3 Meter",
            "Fitur: Anti Slip",
        ]
    }

  ];

  // cari produk sesuai param id
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Produk tidak ditemukan</p>;
  }

  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    telp: "",
    email: "",
    pembayaran: "Transfer Bank",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.nama}, pesanan untuk ${product.name} sudah diproses!`);
  };

  return (
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Kiri: Foto + Deskripsi */}
      <div>
        <img src={product.image} alt={product.name} className="rounded-xl shadow-lg w-auto h-auto object-contain" />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-lg text-gray-700 mt-2">{product.price}</p>
        <p className="mt-4 text-gray-600">{product.description}</p>

        <h2 className="text-xl font-semibold mt-6">Spesifikasi:</h2>
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          {product.specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>

      {/* Kanan: Form Penyewaan */}
      <div className="bg-white shadow-xl rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Form Penyewaan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Alamat</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">No. Telepon</label>
            <input
              type="text"
              name="telp"
              value={formData.telp}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Metode Pembayaran</label>
            <select
              name="pembayaran"
              value={formData.pembayaran}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg"
            >
              <option>Transfer Bank</option>
              <option>COD</option>
              <option>e-Wallet</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Sewa Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}