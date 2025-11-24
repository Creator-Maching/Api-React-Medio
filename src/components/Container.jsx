import { useState } from "react";
import { buscarEspecie } from "../services/inatService";
import SearchBox from "./SearchBox";
import SpeciesCard from "./SpeciesCard";

export default function Container() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(query) {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const resultado = await buscarEspecie(query);
      setData(resultado);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="Container flex-grow p-4 m-3 space-y-4">
      <p className="text-lg text-white bg-green-700 p-3 border rounded-lg">
        Bem-vindo à busca de espécies de animais do mundo!
        Site construido para busca de nomes de Animais para estudos e pesquisas.
        Além disso fornece o nome em inglês do animal pesquisado. Feito para biólogos
        e entusiastas da vida selvagem. Para isso precisa saber o nome científico da espécie.
      </p>

      <SearchBox onSearch={handleSearch} />

      {loading && (
        <p className="text-yellow-300 text-lg font-semibold">Carregando...</p>
      )}

      {error && (
        <p className="text-red-400 text-lg font-semibold">{error}</p>
      )}

      {data && <SpeciesCard data={data} />}
    </div>
  );
}
