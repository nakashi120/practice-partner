// import { Link } from "@chakra-ui/react"
import { memo, VFC } from "react"
import { Link } from "react-router-dom"

export const Wanteds: VFC = memo(() => {
  return (
    <div>
      <p>募集中案件ページです。</p>
      <Link to="/wanteds/100">詳細</Link>
    </div>
  )
})
