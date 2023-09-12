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
