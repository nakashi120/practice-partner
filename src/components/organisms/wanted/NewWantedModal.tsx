import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react"
import { memo, VFC } from "react"
import { PrimaryButton } from "../../atoms/button/PrimaryButton"

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const NewWantedModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
      returnFocusOnClose={false}
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>New Wanted</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>案件</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>内容</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>費用</FormLabel>
              <Input />
            </FormControl>
            <PrimaryButton onClick={() => alert("新規作成")}>Add</PrimaryButton>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
