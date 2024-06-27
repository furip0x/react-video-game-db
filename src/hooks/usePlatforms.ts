import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"

export interface IPlatform {
  id: number
  name: string
  slug: string
}

const apiClient = new APIClient<IPlatform>("/platforms/lists/parents")

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  })
}
export default usePlatforms
