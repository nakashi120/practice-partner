import { Box, Flex, Progress, Stack, Text } from "@chakra-ui/react"
import { memo, VFC } from "react"

type Props = {
  title: string
  content: string
  price: number
  totalNum: number
  applicationNum: number
  onClick: () => void
}

export const WantedCard: VFC<Props> = memo((props) => {
  const { title, content, price, totalNum, applicationNum, onClick } = props
  const value = (applicationNum / totalNum) * 100
  return (
    <Box
      p={4}
      w="250px"
      h="200px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray">
          {content}
        </Text>
        <Text fontSize="sm" color="gray">
          {`${price.toLocaleString()}円`}
        </Text>
        <Flex align="center" justify="center">
          <Box w="180px" pr={4}>
            <Progress
              borderRadius="lg"
              value={value}
              size="md"
              colorScheme="cyan"
            />
          </Box>
          <Box>
            <Text fontSize="sm" color="gray">
              {applicationNum}/{totalNum}
            </Text>
          </Box>
        </Flex>
        {/* <CircularProgress value={value} color="green.400">
            <CircularProgressLabel>{`${value}%`}</CircularProgressLabel>
          </CircularProgress> */}
      </Stack>
    </Box>
  )
})
