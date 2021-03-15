import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react"
import { memo, VFC } from "react"

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        <IconButton
          aria-label="サイドメニューボタン"
          icon={<ChevronRightIcon />}
          display={{ base: "block", md: "none" }}
          variant="outline"
          onClick={onOpen}
        />
        <Flex
          align="baseline"
          as="a"
          mr={8}
          ml={5}
          _hover={{ cursor: "pointer" }}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            練習相手募集アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link>募集一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <Spacer />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">募集中案件一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
})
