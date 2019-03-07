import { CharacterStructure } from './characters';

export interface AppState {
  loading: boolean;
  currentPage: number;
  totalCount: number | null;
  error: string | null;
  characters: CharacterStructure[];
}
