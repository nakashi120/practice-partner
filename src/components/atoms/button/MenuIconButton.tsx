import { memo, VFC } from "react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"

type Props = {
  onOpen: () => void
}

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props
  return (
    <IconButton
      aria-label="サイドメニューボタン"
      icon={<ChevronRightIcon />}
      display={{ base: "block", md: "none" }}
      variant="outline"
      onClick={onOpen}
    />
  )
})
