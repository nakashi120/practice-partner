import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react"
import { memo, useState, VFC } from "react"

export const Login: VFC = memo(() => {
  const [show, setShow] = useState(false)

  const onClickShow = () => setShow(!show)

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading
          as="h1"
          size="lg"
          textAlign="center"
          fontSize="2xl"
          color="gray.600"
        >
          練習相手募集アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <Input placeholder="ユーザーID" pr={5} />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="パスワード"
            />
            <InputRightElement width="5rem">
              <Button
                _hover={{ opacity: 0.8 }}
                h="1.75rem"
                size="sm"
                onClick={onClickShow}
                color="gray.600"
              >
                {show ? "非表示" : "表示"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  )
})
