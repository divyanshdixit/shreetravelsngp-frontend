import { TableCell, TableRow } from "@mui/material";
import React, { useContext, useMemo } from "react";
import data from '../../mocks/data.json';
import { TranxRowContext } from "../../components/SuccessTraxn";
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';

const TableRowTraxn = () => {
    const contextData = useContext(TranxRowContext);

    const getRowsCols = useMemo(() => {

    let colArr = [];
    let rowArr = [];
    if(contextData){
        for (let i = 0; i <contextData.row.size; i++) {
            colArr.push(contextData.col[i]);
            rowArr.push(contextData.row.get(contextData.col[i]));
        }
    }
    return {rows: rowArr, cols: colArr}
    }, [contextData])

    const clickToCopy = (e) => {
        navigator.clipboard.writeText(e.target.parentElement.parentElement.innerText);
        document.getElementById('copied').innerText = 'Copied';
        document.getElementById('copied').style.visibility = 'visible'
        setTimeout(() => {
            document.getElementById('copied').style.visibility = 'hidden'
        },2000);
    }

    return (
        <>
        {
            getRowsCols.cols.map((item, i) => (
            <TableRow key={i}>
                <TableCell align="right">{data.transactions[item]}</TableCell>
                <TableCell align="left" id={i ===2 && 'tid'}>{getRowsCols.rows[i]} {i===2 && <><FileCopyRoundedIcon className="copyicon" onClick={(e) => clickToCopy(e)}/> <span id="copied"></span></>}</TableCell>
            </TableRow>
            ))
        }
      </>
    );
  
};

export default React.memo(TableRowTraxn);
