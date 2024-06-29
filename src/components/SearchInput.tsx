import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router"
import useGameQueryStore from "../store"

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchtext)
  const ref = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(event) => {
        console.log(event)
        event.preventDefault()
        if (ref.current) {
          setSearchText(ref.current.value)
          navigate("/")
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
