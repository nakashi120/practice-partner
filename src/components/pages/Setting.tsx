import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react"
import { memo, VFC } from "react"
import { useLoginUser } from "../../hooks/useLoginUser"

export const Setting: VFC = memo(() => {
  const { loginUser } = useLoginUser()

  return (
    <>
      <Flex align="center" justify="center" m={8}>
        <Box bg="white" w="4xl" p={4} borderRadius="md" shadow="md">
          <Heading fontSize="lg" my={4}>
            SETTING
          </Heading>
          <Stack spacing={4} py={4} px={10}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={loginUser?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>会社</FormLabel>
              <Input value={loginUser?.company.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>E-MAIL</FormLabel>
              <Input value={loginUser?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>電話</FormLabel>
              <Input value={loginUser?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </Box>
      </Flex>
    </>
  )
})
