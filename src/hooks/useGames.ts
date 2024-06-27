import { useQuery } from "@tanstack/react-query"
import { IGameQuery } from "../App"
import apiClient, { IFetchResponse } from "../services/api-client"

export interface IPlatform {
  id: number
  name: string
  slug: string
}

export interface IGame {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: IPlatform }[]
  metacritic: number
  rating_top: number
}

const useGames = (gameQuery: IGameQuery) => {
  return useQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<IFetchResponse<IGame>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  })
}

export default useGames
