import { ReactNode } from "react";
import { Pokemon } from "../../../interfaces/Pokemon";

export interface TablePokemonsColumn {
  title: string;
  key: string;
  render?: (currentItem: TablePokemonsData) => ReactNode;
}

export interface TablePokemonsData {
  key: string;
  name: string;
  image: string;
  attack: number;
  defense: number;
  data: Pokemon;
}

export type KeyTable = keyof TablePokemonsData;

export interface TablePokemonsProps {
  data: TablePokemonsData[];
  columns: TablePokemonsColumn[];
}
