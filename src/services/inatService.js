// Função auxiliar - Wikipedia
async function buscarWikipedia(titulo) {
  try {
    const res = await fetch(
      `https://pt.wikipedia.org/api/rest_v1/page/summary/${titulo}`
    );
    if (!res.ok) return null;

    const json = await res.json();
    return json.extract || null;
  } catch {
    return null;
  }
}

async function buscarDescricao(especie) {
  let desc = null;

  if (especie.wikipedia_url) {
    const title = especie.wikipedia_url.split("/").pop();
    desc = await buscarWikipedia(title);
    if (desc) return desc;
  }

  desc = await buscarWikipedia(especie.name);
  if (desc) return desc;

  if (especie.preferred_common_name) {
    desc = await buscarWikipedia(especie.preferred_common_name);
    if (desc) return desc;
  }

  return "Descrição não disponível.";
}

// Função principal
export async function buscarEspecie(query) {
  const response = await fetch(
    `https://api.inaturalist.org/v1/taxa?q=${query}`
  );

  if (!response.ok) throw new Error("Erro ao buscar API");

  const json = await response.json();

  if (!json.results || json.results.length === 0)
    throw new Error("Espécie não encontrada");

  const especie = json.results[0];

  const descricao = await buscarDescricao(especie);

  const imagem =
    especie.default_photo?.medium_url ||
    especie.default_photo?.url ||
    null;

  return {
    nome: especie.preferred_common_name || "Nome comum indisponível",
    cientifico: especie.name,
    descricao,
    imagem,
  };
}
