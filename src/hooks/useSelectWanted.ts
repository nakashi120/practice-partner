import { useCallback, useState } from "react"
import { Wanted } from "../types/api/wanted"

type Props = {
  id: number
  wanteds: Array<Wanted>
  onOpen: () => void
}

export const useSelectWanted = () => {
  const [selectedWanted, setSelectedWanted] = useState<Wanted | null>(null)

  const onSelectWanted = useCallback((props: Props) => {
    const { id, wanteds, onOpen } = props
    const targetWanted = wanteds.find((wanted) => wanted.id === id)
    setSelectedWanted(targetWanted ?? null)
    onOpen()
  }, [])
  return { onSelectWanted, selectedWanted }
}
