import { Paper, Table, TableBody, TableContainer, TableRow, TableHead } from '@mui/material'
import React from 'react'
import TransactionTableRow from './TableRow';

const TableComponent = () => {
  return (
    <TableContainer className="table-container table" component={Paper} sx={{width:'50%', margin: '0 auto'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    {/* <TableCell align="left"> </TableCell> */}
                </TableRow>
            </TableHead>

            <TableBody>
                <TransactionTableRow />
            </TableBody>

        </Table>
    </TableContainer>
  )
}

export default React.memo(TableComponent);