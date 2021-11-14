import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../../API/API_Response";
import {series} from "./API_Series";
import {format} from "date-fns";

function DataTable({day}:{day: ForecastDay | undefined}){
    //initialising at -1 as we want the first value to be 0
    let i = 0
    let j = 0
    return(
        <TableContainer component={Paper} sx={{ maxHeight: 300 , maxWidth: 800 }}>
            <Table sx={{ minWidth: 650}} stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={{position: "sticky",left: 0, bgcolor: "background.paper", borderRight: 1, zIndex:1000}}/>
                        {Array.from(Array(24), ()=>  i++ ).map(hour => <TableCell align="center">{format(new Date(2000,1,1, hour), "h aa")}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*Condition is a special case attribute, as it is an object*/}
                    <TableRow
                        key={'condition'}
                    >
                        {/*making initial column sticky*/}
                        <TableCell component="th" scope="row" sx={{position: "sticky",left: 0, bgcolor: "background.paper", borderRight: 1}}>
                            {'Condition'}
                        </TableCell>
                        {
                            Array.from(Array(24), () => j++).map(hour => {
                            // console.log(day?.hour, hour)
                            return <TableCell
                                align="center">
                                {/*<Typography>{day?.hour[hour]}</Typography>*/}
                                <img src={day?.hour[hour]['condition'].icon}/>
                            </TableCell>
                        }
                        )}

                    </TableRow>
                    {/*Mapping all selected attributes which are also graphed*/}
                    {series.map((row) => {
                        let i = 0
                        return <TableRow
                            key={row.label}
                        >
                            {/*making initial column sticky*/}
                            <TableCell component="th" scope="row" sx={{position: "sticky",left: 0, bgcolor: "background.paper", borderRight: 1}}>
                                {row.label}
                            </TableCell>
                            {Array.from(Array(24), () => i++).map(hour => <TableCell
                                align="center">{`${day?.hour[hour][row.api_key]} ${row.unit}`}</TableCell>)}

                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable