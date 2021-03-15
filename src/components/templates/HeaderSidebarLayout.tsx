import { useDisclosure } from "@chakra-ui/react"
import { memo, ReactNode, VFC } from "react"
import { Header } from "../organisms/layout/Header"
import { Sidebar } from "../organisms/layout/Sidebar"

type Props = {
  children: ReactNode
}

export const HeaderSidebarLayout: VFC<Props> = memo((props) => {
  const { children } = props
  const { isOpen, onClose } = useDisclosure()
  const variant = isOpen ? "sidebar" : "drawer"
  return (
    <>
      <Sidebar isOpen={isOpen} onClose={onClose} variant={variant} />
      <Header />
      {children}
    </>
  )
})
