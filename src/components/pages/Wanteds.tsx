import { AddIcon } from "@chakra-ui/icons"
import {
  Flex,
  Heading,
  IconButton,
  Tooltip,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { memo, useCallback, VFC } from "react"
import { useLoginUser } from "../../hooks/useLoginUser"
import { WantedDetailModal } from "../organisms/wanted/WantedDetailModal"
import { NewWantedModal } from "../organisms/wanted/NewWantedModal"
import { WantedCard } from "../organisms/WantedCard"
import { useSelectWanted } from "../../hooks/useSelectWanted"

const sampleData = [
  {
    id: 1,
    title: "美容師の練習",
    content: "髪の長い人の髪を切る練習",
    price: 1000,
    totalNum: 10,
    applicationNum: 3,
  },
  {
    id: 2,
    title: "ネイルの練習",
    content: "爪の長い人のネイルを整える練習",
    price: 1000,
    totalNum: 10,
    applicationNum: 7,
  },
  {
    id: 3,
    title: "家庭教師の練習",
    content: "人にものを教える練習",
    price: 1000,
    totalNum: 10,
    applicationNum: 9,
  },
  {
    id: 4,
    title: "なんかの練習",
    content: "とにかくなんでもいいから練習",
    price: 1000,
    totalNum: 10,
    applicationNum: 4,
  },
]

export const Wanteds: VFC = memo(() => {
  const {
    isOpen: isOpenWantedDetailModal,
    onOpen: onOpenWantedDetailModal,
    onClose: onCloseWantedDetailModal,
  } = useDisclosure()

  const {
    isOpen: isOpenNewWantedModal,
    onOpen: onOpenNewWantedModal,
    onClose: onCloseNewWantedModal,
  } = useDisclosure()

  const { loginUser } = useLoginUser()
  console.log(loginUser)

  const { onSelectWanted, selectedWanted } = useSelectWanted()

  const onClickWanted = useCallback(
    (id: number) => {
      onSelectWanted({
        id,
        wanteds: sampleData,
        onOpen: onOpenWantedDetailModal,
      })
    },
    [onOpenWantedDetailModal, onSelectWanted]
  )

  const onClickNewWanted = useCallback(() => onOpenNewWantedModal(), [
    onOpenNewWantedModal,
  ])

  return (
    <>
      <Flex align="center" justify="center" mt={8}>
        <Heading fontSize="lg" pr="4">
          WANTEDS
        </Heading>
        <Tooltip hasArrow label="New Item">
          <IconButton
            colorScheme="teal"
            aria-label="NewItem"
            size="lg"
            icon={<AddIcon />}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
            borderRadius="full"
            onClick={onClickNewWanted}
          />
        </Tooltip>
      </Flex>
      <Wrap p={{ base: 4, md: 10 }} justify="center">
        {sampleData.map((wanted) => (
          <WrapItem key={wanted.id} mx="auto">
            <WantedCard
              id={wanted.id}
              title={wanted.title}
              content={wanted.content}
              price={wanted.price}
              applicationNum={wanted.applicationNum}
              totalNum={wanted.totalNum}
              onClick={onClickWanted}
            />
          </WrapItem>
        ))}
      </Wrap>
      <WantedDetailModal
        wanted={selectedWanted}
        isOpen={isOpenWantedDetailModal}
        onClose={onCloseWantedDetailModal}
      />
      <NewWantedModal
        isOpen={isOpenNewWantedModal}
        onClose={onCloseNewWantedModal}
      />
    </>
  )
})
