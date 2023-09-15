import { usePokemons, usePokemonsToggle } from '@/context/PokemonsContext';
import { getSpeciePokemon } from '@/data/getterPokemonsSpecies';
import { DataSpeciesPokemon } from '@/types/typesData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useInfoPokemon = () => {
  const { id } = useParams();
  const pokemonContext = usePokemons();
  const contextTogglePokemon = usePokemonsToggle();
  const [speciePokemon, setSpeciesPokemon] =
    useState<DataSpeciesPokemon | null>(null);
  const [versionSelected, setVersionSelected] = useState<string>('red');
  useEffect(() => {
    if (id) {
      contextTogglePokemon?.setIdPokemon(Number(id));
      getSpeciePokemon(Number(id)).then((speciePokemon) =>
        setSpeciesPokemon(speciePokemon)
      );
    }
  }, [id]);

  return {
    ...pokemonContext,
    speciePokemon,
    versionSelected,
    setVersionSelected,
  };
};
