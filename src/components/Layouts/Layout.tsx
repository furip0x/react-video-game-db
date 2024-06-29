import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router"
import Navbar from "../Navbar"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout
