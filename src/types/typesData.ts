export interface DataGetPokemon {
  abilities: Ability[];
  base_experience: number;
  forms: SingleTypeBase[];
  game_indices: GameIndexes[];
  height: number;
  held_items: HeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types?: [];
  sprites: Sprite;
  stats: Stats[];
  types: Types[];
  weight: number;
}

export interface HeldItems {
  item: SingleTypeBase;
  version_details: VersionDetails[];
}

export interface VersionDetails {
  rarity: number;
  version: SingleTypeBase;
}

export interface GameIndexes {
  game_index: number;
  version: SingleTypeBase;
}

export interface Sprite {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: Other;
  versions: Versions;
}

export interface Versions {
  [key: string]: Fronts;
}

export interface Other {
  dream_world: Fronts;
  home: Fronts;
  'official-artwork': Fronts;
}

export interface Ability {
  ability: SingleTypeBase;
  is_hidden: boolean;
  slot: number;
}

export interface SingleTypeBase {
  name: string;
  url: string;
}

export interface Move {
  move: SingleTypeBase;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at?: number;
  move_learn_method?: SingleTypeBase;
  version_group?: SingleTypeBase;
}

export interface Fronts {
  back_default?: string;
  back_gray?: string;
  back_transparent?: string;
  front_gray?: string;
  front_transparent?: string;
  front_default?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: SingleTypeBase;
}

export interface Types {
  slot: number;
  type: SingleTypeBase;
}

export interface DataSpeciesPokemon {
  base_happiness: number;
  capture_rate: number;
  color: SingleTypeBase;
  egg_groups: SingleTypeBase[];
  evolution_chain: EvolutionChain;
  evolves_from_species: null;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions?: [];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: SingleTypeBase;
  growth_rate: SingleTypeBase;
  habitat: SingleTypeBase;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: SingleTypeBase;
  varieties: Variety[];
}

export interface EvolutionChain {
  url: string;
}

export interface FlavorTextEntry extends Language {
  flavor_text: string;
  version: SingleTypeBase;
}

export interface Genera extends Language {
  genus: string;
}

export interface Name extends Language {
  name: string;
}

export interface Language {
  language: SingleTypeBase;
}

export interface PalParkEncounter {
  area: SingleTypeBase;
  base_score: number;
  rate: number;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: SingleTypeBase;
}

export interface Variety {
  is_default: boolean;
  pokemon: SingleTypeBase;
}
