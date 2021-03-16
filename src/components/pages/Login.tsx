import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { memo, useState, VFC } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { InputPassword } from "../atoms/input/InputPassword"

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
          <InputPassword show={show} onClickShow={onClickShow}></InputPassword>
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
