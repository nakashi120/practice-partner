import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { ChangeEvent, memo, useState, VFC } from "react"
import { useAuth } from "../../hooks/useAuth"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { InputPassword } from "../atoms/input/InputPassword"

export const Login: VFC = memo(() => {
  const [show, setShow] = useState(false)
  const [userId, setUserId] = useState("")
  const { login, loading } = useAuth()

  const onClickShow = () => setShow(!show)

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)

  const onClickLogin = () => login(userId)

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
          <Input
            placeholder="ユーザーID"
            pr={5}
            value={userId}
            onChange={onChangeUserId}
          />
          <InputPassword show={show} onClickShow={onClickShow}></InputPassword>
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
