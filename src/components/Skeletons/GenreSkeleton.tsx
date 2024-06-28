import { HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react"

const GenreSkeleton = () => {
  return (
    <Stack spacing="10px">
      <SkeletonText noOfLines={1} skeletonHeight={5} marginBottom={3} />
      {Array.from({ length: 12 }).map((_, index) => (
        <HStack key={index}>
          <Skeleton
            width="32px"
            height="32px"
            flexShrink="0"
            borderRadius="8px"
          />
          <Skeleton width="100%" height={2} />
        </HStack>
      ))}
    </Stack>
  )
}

export default GenreSkeleton
