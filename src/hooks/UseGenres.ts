import { useQuery } from "@tanstack/react-query"
import apiClient, { IFetchResponse } from "../services/api-client"

export interface IGenre {
  id: number
  name: string
  image_background: string
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: () =>
      apiClient.get<IFetchResponse<IGenre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  })
}

export default useGenres
