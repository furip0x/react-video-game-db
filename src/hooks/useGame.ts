import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import IGame from "../entities/IGame"
import APIClient from "../services/api-client"

const apiClient = new APIClient<IGame>("/games")

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  })
}
export default useGame
