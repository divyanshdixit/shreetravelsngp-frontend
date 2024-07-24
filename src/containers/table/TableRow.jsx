import { TableCell, TableRow } from "@mui/material";
import React, { useContext, useMemo } from "react";
import data from '../../mocks/data.json';
import { TranxRowContext } from "../../components/SuccessTraxn";

const TableRowTraxn = () => {
    const contextData = useContext(TranxRowContext);

    const getRowsCols = useMemo(() => {

    let colArr = [];
    let rowArr = [];
    if(contextData){
        for (let i = 0; i <=contextData.row.size; i++) {
            colArr.push(contextData.col[i]);
            rowArr.push(contextData.row.get(contextData.col[i]));
        }
    }
    return {rows: rowArr, cols: colArr}

    }, [contextData])

    // useEffect(() => {
        
    //     // eslint-disable-next-line
    // }, [rows, cols, colArr, rowArr]);

    return (
        <>
        {
            getRowsCols.cols.map((item, i) => (
            <TableRow key={i}>
                <TableCell align="right">{data.transactions[item]}</TableCell>
                <TableCell align="left">{getRowsCols.rows[i]}</TableCell>
            </TableRow>
            ))
        }
      </>
    );
  
};

export default React.memo(TableRowTraxn);
