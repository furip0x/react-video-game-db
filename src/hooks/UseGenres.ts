import { useQuery } from "@tanstack/react-query"
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
    staleTime: 24 * 60 * 60 * 1000,
  })
}

export default useGenres
