import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { memo, VFC } from "react"

type Props = {
  show: boolean
  onClickShow: () => void
}

export const InputPassword: VFC<Props> = memo((props) => {
  const { show, onClickShow } = props
  return (
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
  )
})
