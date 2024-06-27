import { useQuery } from "@tanstack/react-query"
import apiClient, { IFetchResponse } from "../services/api-client"

export interface IPlatform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<IFetchResponse<IPlatform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  })
}
export default usePlatforms
