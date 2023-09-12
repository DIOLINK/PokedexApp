import { GridCards, Header } from '@/components';
import {
  PokemonsContext,
  PokemonsToggleContext,
} from '@/context/PokemonsContext';
import { usePokemons } from '@/hook/usePokemons';

function App() {
  const { pokemons, typePokemon, setTypePokemon } = usePokemons();
  return (
    <PokemonsContext.Provider value={{ pokemons, typePokemon }}>
      <PokemonsToggleContext.Provider value={{ setTypePokemon }}>
        <Header />
        <GridCards />
      </PokemonsToggleContext.Provider>
    </PokemonsContext.Provider>
  );
}

export default App;
