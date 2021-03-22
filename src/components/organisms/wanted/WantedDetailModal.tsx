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
import { Wanted } from "../../../types/api/wanted"

type Props = {
  wanted: Wanted | null
  isOpen: boolean
  onClose: () => void
}

export const WantedDetailModal: VFC<Props> = memo((props) => {
  const { wanted, isOpen, onClose } = props
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ウォンテッド詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>案件</FormLabel>
              <Input value={wanted?.title} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>内容</FormLabel>
              <Input value={wanted?.content} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>費用</FormLabel>
              <Input value={wanted?.price} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
