import { memo, VFC } from "react"
import { RouteComponentProps, useParams } from "react-router-dom"
// import { useParams } from "react-router-dom"

export const Wanted: VFC = memo(() => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <p>各応募のページです。</p>
      <p>パラメータは{id}です</p>
    </>
  )
})
