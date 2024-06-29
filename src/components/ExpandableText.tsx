import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface Props {
  children: string
  limit: number
}

const ExpandableText = ({ children, limit }: Props) => {
  const [expanded, setIsExpanded] = useState(false)

  if (!children) return null

  if (children.length <= limit) {
    return <Text>{children}</Text>
  }

  const summary = expanded ? children : children.substring(0, limit) + "..."

  return (
    <>
      <Text>
        {summary}
        <Button
          colorScheme="yellow"
          size="xs"
          fontWeight="bold"
          marginLeft={1}
          onClick={() => setIsExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  )
}

export default ExpandableText
