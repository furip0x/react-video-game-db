import { useInfiniteQuery } from "@tanstack/react-query"
import ms from "ms"
import IGame from "../entities/IGame"
import APIClient, { IFetchResponse } from "../services/api-client"
import useGameQueryStore from "../store"

const apiClient = new APIClient<IGame>("/games")

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery)

  return useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: gameQuery.pageSize,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
    staleTime: ms("24h"),
  })
}

export default useGames
