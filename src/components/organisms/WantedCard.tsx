import { Box, Flex, Image, Progress, Stack, Text } from "@chakra-ui/react"
import { memo, VFC } from "react"

type Props = {
  id: number
  title: string
  content: string
  price: number
  totalNum: number
  applicationNum: number
  onClick: (id: number) => void
}

export const WantedCard: VFC<Props> = memo((props) => {
  const { id, title, content, price, totalNum, applicationNum, onClick } = props
  const value = (applicationNum / totalNum) * 100

  const colorScheme = value >= 80 ? "orange" : "green"

  return (
    <Box
      p={4}
      w="260px"
      h="310px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center" mx="auto">
        <Image
          boxsize="160px"
          h="160px"
          src="https://source.unsplash.com/random"
          m="auto"
        />
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
              colorScheme={colorScheme}
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
