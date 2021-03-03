import React from "react"
import GenericTemplate from "../templates/GenericTemplate"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"

const createData = (
  id: number,
  title: string,
  body: string,
  requiredNum: number,
  applicationNum: number
) => {
  return { id, title, body, requiredNum, applicationNum }
}

const rows = [
  createData(1, "AAAの件", "Aの回収", 10, 5),
  createData(2, "BBBの件", "Bの回収", 15, 3),
]

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const ProductPage: React.FC = () => {
  const classes = useStyles()

  return (
    <GenericTemplate title="募集ページ">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="right">タイトル</TableCell>
              <TableCell align="right">内容</TableCell>
              <TableCell align="right">必要数</TableCell>
              <TableCell align="right">応募数</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell component="th" scope="row" align="right">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.body}</TableCell>
                <TableCell align="right">{row.requiredNum}</TableCell>
                <TableCell align="right">{row.applicationNum}</TableCell>
                <TableCell align="center">
                  <Button variant="contained">詳細</Button>
                  <Button variant="contained" color="primary">
                    応募
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  )
}

export default ProductPage
