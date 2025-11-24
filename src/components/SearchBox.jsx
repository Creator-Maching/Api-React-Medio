import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-2">
    
      <input
        type="text"
        placeholder="Digite o nome Científico da Espécie"
        onChange={(e) => setInput(e.target.value)}
        className="w-full max-w-md p-2 text-red-700 bg-white border
         border-gray-300 rounded-lg shadow-sm
         focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        onClick={() => onSearch(input)}
        className="bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800"
      >
        Buscar
      </button>
    </div>
  );
}
