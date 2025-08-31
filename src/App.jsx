import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import FurniturePage from "./pages/kategori/furniture";
import KitchenPage from "./pages/kategori/dapur";
import LaundryPage from "./pages/kategori/laundry";
import ElektronikPage from "./pages/kategori/elektronik";
import PerkakasPage from "./pages/kategori/perkakas";
import ProductDetail from "./pages/kategori/detail";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/furniture" element={<FurniturePage />} />
          <Route path="/dapur" element={<KitchenPage />} />
          <Route path="/laundry" element={<LaundryPage />} />
          <Route path="/elektronik" element={<ElektronikPage />} />
          <Route path="/perkakas" element={<PerkakasPage />} />
          <Route path="/produk/:id" element={<ProductDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;