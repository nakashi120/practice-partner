import React from "react"
import GenericTemplate from "../templates/GenericTemplate"
// import AppContext from "../../contexts/AppContext"
import Wanted from "./Wanted"

import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const createData = (
  id: number,
  title: string,
  body: string,
  prefecture: string,
  requiredNum: number,
  applicationNum: number
) => {
  return { id, title, body, prefecture, requiredNum, applicationNum }
}

const wanteds = [
  createData(1, "美容師の卵", "女性の髪を切る練習", "愛知県", 10, 5),
  createData(2, "ネイリストの卵", "ネイルのモデル", "愛知県", 15, 3),
]

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const WantedPage: React.FC = () => {
  const classes = useStyles()

  return (
    <GenericTemplate title="募集ページ">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">タイトル</TableCell>
              <TableCell align="left">内容</TableCell>
              <TableCell align="left">募集場所</TableCell>
              <TableCell align="left">必要数</TableCell>
              <TableCell align="left">応募数</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wanteds.map((wanted, index) => (
              <Wanted key={index} wanted={wanted} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  )
}

export default WantedPage
