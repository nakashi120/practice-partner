import { memo, useContext, VFC } from "react"
import { useParams } from "react-router-dom"
import { WantedContext } from "../../providers/WantedProvider"
// import { useParams } from "react-router-dom"

export const Wanted: VFC = memo(() => {
  const { id } = useParams<{ id: string }>()

  const context = useContext(WantedContext)

  return (
    <>
      <p>各応募のページです。</p>
      <p>パラメータは{id}です。</p>
    </>
  )
})
