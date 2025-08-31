export default function Kontak() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Kontak Kami</h1>
      <p className="text-gray-600 mb-4">
        Ada pertanyaan? Hubungi kami melalui form di bawah.
      </p>
      <form className="max-w-md space-y-4">
        <input 
          type="text" 
          placeholder="Nama" 
          className="w-full border rounded-lg px-4 py-2"
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full border rounded-lg px-4 py-2"
        />
        <textarea 
          placeholder="Pesan" 
          className="w-full border rounded-lg px-4 py-2 h-32"
        ></textarea>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Kirim
        </button>
      </form>
    </div>
  );
}