import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { BsCheck, BsChevronDown } from "react-icons/bs"
import { IPlatform } from "../hooks/useGames"
import usePlatforms from "../hooks/usePlatforms"
import PlatformSelectorSkeleton from "./Skeletons/PlatformSelectorSkeleton"

interface Props {
  onSelectPlatform: (platform: IPlatform) => void
  selectedPlatform: IPlatform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms()

  if (error) return null

  if (isLoading) return <PlatformSelectorSkeleton />

  return (
    <Box paddingBottom="20px">
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => {
            const currentPlatform = platform.id === selectedPlatform?.id

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
    </Box>
  )
}

export default PlatformSelector
