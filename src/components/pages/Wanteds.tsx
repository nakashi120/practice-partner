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
import { Link, useHistory } from "react-router-dom"

export const Wanteds: VFC = memo(() => {
  const history = useHistory()

  const onClickDetail = useCallback(() => history.push("/wanteds/100"), [
    history,
  ])

  return (
    <Flex align="center" justify="center" margin={8}>
      <Box bg="white" w="4xl" p={4} borderRadius="md" shadow="md">
        <Heading fontSize="lg">募集中案件</Heading>
        <Table fontSize="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>TITLE</Th>
              <Th>CONTENT</Th>
              <Th>料金</Th>
              <Th>応募状況</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>美容師の練習</Td>
              <Td>髪の長い女性の人の練習</Td>
              <Td>¥1,000</Td>
              <Td>
                <CircularProgress value={40} color="green.400">
                  <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
              </Td>
              <Td>
                <Button size="sm" onClick={onClickDetail}>
                  詳細
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>ネイルの練習</Td>
              <Td>爪が長い人の練習</Td>
              <Td>¥1,000</Td>
              <Td>
                <Progress value={40} />
              </Td>
              <Td>
                <Button size="sm" onClick={onClickDetail}>
                  詳細
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  )
})
