import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router"
import Navbar from "../components/Navbar"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exists"
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  )
}

export default ErrorPage
