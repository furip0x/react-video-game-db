import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsCheck, BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import usePlatforms from "../hooks/usePlatforms"
import useGameQueryStore from "../store"
import PlatformSelectorSkeleton from "./Skeletons/PlatformSelectorSkeleton"

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms()

  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  )
  const setSelectedPlatformId = useGameQueryStore(
    (store) => store.setPlatformId
  )
  const platform = usePlatform(selectedPlatformId)

  if (error) return null

  if (isLoading) return <PlatformSelectorSkeleton />

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformId ? platform?.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => {
          const currentPlatform = platform.id === selectedPlatformId

          return (
            <MenuItem
              key={platform.id}
              onClick={() => setSelectedPlatformId(platform.id)}
              justifyContent="space-between"
            >
              {platform.name}
              {currentPlatform && <BsCheck size={20} />}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
