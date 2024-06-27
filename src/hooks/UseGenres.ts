import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import APIClient from "../services/api-client"

export interface IGenre {
  id: number
  name: string
  image_background: string
}

const apiClient = new APIClient<IGenre>("/genres")

const useGenres = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  })
}

export default useGenres
