import { memo, useCallback, VFC } from "react"
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"

import { MenuIconButton } from "../../atoms/button/MenuIconButton"
import { MenuDrawer } from "../../molecules/MenuDrawer"

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  const onClickHome = useCallback(() => history.push("/home"), [history])
  const onClickWanteds = useCallback(() => history.push("/wanteds"), [history])
  const onClickSetting = useCallback(() => history.push("/setting"), [history])

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <MenuIconButton onOpen={onOpen} />
        <Flex
          align="baseline"
          as="a"
          mr={8}
          ml={5}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "2xl" }}>
            Practice Partner
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickWanteds}>Wanteds</Link>
          </Box>
          <Link onClick={onClickSetting}>Setting</Link>
        </Flex>
        <Spacer />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickWanteds={onClickWanteds}
        onClickSetting={onClickSetting}
      />
    </>
  )
})
