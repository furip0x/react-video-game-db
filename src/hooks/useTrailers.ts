import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import ITrailer from "../entities/IMovies"
import APIClient from "../services/api-client"

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<ITrailer>(`/games/${gameId}/movies`)

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  })
}
export default useTrailers
