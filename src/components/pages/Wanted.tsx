import React from "react"

import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import Button from "@material-ui/core/Button"

const Wanted = ({ wanted }: { wanted: any }) => {
  const handleDetailButton = () => {
    return alert("詳細ボタンがクリックされました。")
  }

  return (
    <>
      <TableRow>
        <TableCell align="left">{wanted.id}</TableCell>
        <TableCell component="th" scope="row" align="left">
          {wanted.title}
        </TableCell>
        <TableCell align="left">{wanted.body}</TableCell>
        <TableCell align="left">{wanted.prefecture}</TableCell>
        <TableCell align="left">{wanted.requiredNum}</TableCell>
        <TableCell align="left">{wanted.applicationNum}</TableCell>
        <TableCell align="center">
          <Button variant="contained" onClick={handleDetailButton}>
            詳細
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Wanted
