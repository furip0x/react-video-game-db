import { create } from "zustand"

interface IGameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  searchText?: string
  pageSize?: number
}

export interface IGameQueryStore {
  gameQuery: IGameQuery
  setSearchtext: (searchtext: string) => void
  setGenreId: (geneId: number) => void
  setPlatformId: (platformId: number) => void
  setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<IGameQueryStore>((set) => ({
  gameQuery: {},
  setSearchtext: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}))

export default useGameQueryStore
