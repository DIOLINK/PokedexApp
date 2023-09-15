const API_URL_SPECIES_POKEMON =
  import.meta.env.VITE_API_URL + 'pokemon-species/' || '';

export const getSpeciePokemon = async (id: number) =>
  await fetch(API_URL_SPECIES_POKEMON + id)
    .then((response) => response.json())
    .then((data) => data);
