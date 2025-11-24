export default function SpeciesCard({ data }) {
  return (
    <div className="p-5 bg-white rounded-lg shadow-lg max-w-xl space-y-3">

      {data.imagem && (
        <img
          src={data.imagem}
          alt={data.nome}
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      )}

      <h2 className="text-2xl font-bold text-gray-900">
        {data.nome}
      </h2>

      <p className="text-gray-600 italic">
        {data.cientifico}
      </p>

      <p className="text-gray-800 leading-relaxed">
        {data.descricao}
      </p>
    </div>
  );
}
