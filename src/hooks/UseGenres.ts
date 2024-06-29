import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import { IGenre } from "../entities/IGenre"
import APIClient from "../services/api-client"

const apiClient = new APIClient<IGenre>("/genres")

const useGenres = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  })
}

export default useGenres
