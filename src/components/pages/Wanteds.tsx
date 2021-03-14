// import { Link } from "@chakra-ui/react"
import { memo, VFC } from "react"
import { Link, useLocation } from "react-router-dom"

export const Wanteds: VFC = memo(() => {
  const { search } = useLocation()
  const query = new URLSearchParams(search)

  return (
    <div>
      <p>募集中案件ページです。</p>
      <p>クエリパラメータは{query.get("name")}</p>
      <Link to="/wanteds/100">詳細</Link>
    </div>
  )
})
