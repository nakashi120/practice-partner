import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { memo, useCallback, VFC } from "react"
import { useLoginUser } from "../../hooks/useLoginUser"
import { WantedDetailModal } from "../organisms/wanted/WantedDetailModal"
import { WantedCard } from "../organisms/WantedCard"

const sampleData = [
  {
    id: 1,
    title: "美容師の練習",
    content: "髪の長い人の髪を切る練習",
    price: 1000,
    totalNum: 10,
    applicationNum: 3,
  },
  {
    id: 2,
    title: "ネイルの練習",
    content: "爪の長い人のネイルを整える練習",
    price: 1000,
    totalNum: 10,
    applicationNum: 7,
  },
  {
    id: 3,
    title: "家庭教師の練習",
    content: "人にものを教える練習",
    price: 1000,
    totalNum: 10,
    applicationNum: 9,
  },
  {
    id: 4,
    title: "なんかの練習",
    content: "とにかくなんでもいいから練習",
    price: 1000,
    totalNum: 10,
    applicationNum: 4,
  },
]

export const Wanteds: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loginUser } = useLoginUser()
  console.log(loginUser)

  const onClickWanted = useCallback(() => onOpen(), [onOpen])

  return (
    <>
      <Flex align="center" justify="center" margin={8}>
        <Box bg="white" w="4xl" p={4} borderRadius="md" shadow="md">
          <Heading fontSize="lg" my={4}>
            WANTEDS LIST
          </Heading>
          <Table fontSize="sm">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>TITLE</Th>
                <Th>CONTENT</Th>
                <Th>PRICE</Th>
                <Th>応募状況</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {sampleData.map((data) => (
                <Tr key={data.id}>
                  <Td>{data.id}</Td>
                  <Td>{data.title}</Td>
                  <Td>{data.content}</Td>
                  <Td>{data.price}</Td>
                  <Td>
                    <CircularProgress
                      value={(data.applicationNum / data.totalNum) * 100}
                      color="green.400"
                    >
                      <CircularProgressLabel>{`${
                        (data.applicationNum / data.totalNum) * 100
                      }%`}</CircularProgressLabel>
                    </CircularProgress>
                  </Td>
                  <Td>
                    <Button size="sm">詳細</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
      <Wrap p={{ base: 4, md: 10 }} justify="center">
        {sampleData.map((wanted) => (
          <WrapItem key={wanted.id} mx="auto">
            <WantedCard
              title={wanted.title}
              content={wanted.content}
              price={wanted.price}
              applicationNum={wanted.applicationNum}
              totalNum={wanted.totalNum}
              onClick={onClickWanted}
            />
          </WrapItem>
        ))}
      </Wrap>
      <WantedDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  )
})
