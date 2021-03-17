import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Progress,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { memo, useCallback, VFC } from "react"
import { useHistory } from "react-router-dom"

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
]

export const Wanteds: VFC = memo(() => {
  const history = useHistory()

  const onClickDetail = useCallback(
    (id: number) => history.push(`/wanteds/${id}`),
    [history]
  )

  return (
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
              <Tr>
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
                  <Button size="sm" onClick={() => onClickDetail(data.id)}>
                    詳細
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  )
})
