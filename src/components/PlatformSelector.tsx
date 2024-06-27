import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsCheck, BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatform"
import usePlatforms, { IPlatform } from "../hooks/usePlatforms"
import PlatformSelectorSkeleton from "./Skeletons/PlatformSelectorSkeleton"

interface Props {
  onSelectPlatform: (platform: IPlatform) => void
  selectedPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error, isLoading } = usePlatforms()
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
              onClick={() => onSelectPlatform(platform)}
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
