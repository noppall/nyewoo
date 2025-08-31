import { Link } from "react-router-dom";
import { Sofa, CookingPot, WashingMachine, Smartphone, Hammer } from "lucide-react";

export default function Produk() {
  const categories = [
    { name: "Furniture", icon: Sofa, path: "/furniture" },
    { name: "Dapur", icon: CookingPot, path: "/dapur" },
    { name: "Laundry", icon: WashingMachine, path: "/laundry" },
    { name: "Elektronik", icon: Smartphone, path: "/elektronik" },
    { name: "Perkakas", icon: Hammer, path: "/perkakas" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {categories.map((cat, idx) => (
        <Link
          key={idx}
          to={cat.path}
          className="flex flex-col items-center justify-center p-6 border rounded-2xl shadow hover:shadow-lg transition"
        >
          <cat.icon className="w-10 h-10 mb-2 text-blue-600" />
          <span className="text-lg font-semibold">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
}