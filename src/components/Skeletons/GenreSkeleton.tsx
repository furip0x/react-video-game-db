import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"

const GenreSkeleton = () => {
  return (
    <Stack spacing="10px">
      {Array.from({ length: 12 }).map((_, index) => (
        <HStack key={index}>
          <SkeletonCircle size="8" flexShrink="0" />
          <Skeleton width="100%" height={2} />
        </HStack>
      ))}
    </Stack>
  )
}

export default GenreSkeleton
