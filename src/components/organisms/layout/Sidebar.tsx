import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  VStack,
} from "@chakra-ui/react"
import { memo, VFC } from "react"

type Props = {
  onClose: () => void
  isOpen: boolean
  variant: "sidebar" | "drawer"
}

const SidebarContent = (onClose: any) => (
  <VStack>
    <Button onClick={onClose} w="100%">
      Home
    </Button>
    <Button onClick={onClose} w="100%">
      About
    </Button>
    <Button onClick={onClose} w="100%">
      Contact
    </Button>
  </VStack>
)

export const Sidebar: VFC<Props> = memo((props) => {
  const { isOpen, onClose, variant } = props
  return variant === "drawer" ? (
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
  ) : (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="#dfdfdf"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  )
})
