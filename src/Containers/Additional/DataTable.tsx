import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../../API/API_Response";
import {series} from "./API_Series";
import {format} from "date-fns";

function DataTable({day}: { day: ForecastDay | undefined }) {
    //initialising at -1 as we want the first value to be 0
    let i = 0
    let j = 0
    return (
        <Paper elevation={5} sx={{maxHeight: '300px', m: 2, overflow: 'hidden', maxWidth: {xs: `calc(100vw - ${5 * 8 * 2}px)`, md: '600px', lg: '800px', xl: '1000px'}}}>
            {/*MUI Table bug requires width to be fixed to prevent overflow*/}
            {/*https://pretagteam.com/question/muidatatable-doesnt-fit-the-space-available*/}
            <TableContainer sx={{borderRadius: 1, maxHeight: '300px',}}>
                <Table stickyHeader aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" scope="row" sx={{
                                position: "sticky",
                                left: 0,
                                bgcolor: "background.paper",
                                borderRight: 1,
                                borderBottom:1,
                                zIndex: 1000
                            }}/>
                            {Array.from(Array(24), () => i++).map(hour => <TableCell
                                sx={{bgcolor: "background.paper", borderBottom:1,}}
                                align="center">{format(new Date(2000, 1, 1, hour), "h aa")}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*Condition is a special case attribute, as it is an object*/}
                        <TableRow
                            key={'condition'}
                        >
                            {/*making initial column sticky*/}
                            <TableCell component="th" scope="row"
                                       sx={{position: "sticky", left: 0, bgcolor: "background.paper", borderRight: 1}}>
                                {'Condition'}
                            </TableCell>
                            {
                                Array.from(Array(24), () => j++).map(hour => {
                                        return <TableCell
                                            sx={{bgcolor: "background.paper"}}
                                            align="center">
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
                                <TableCell component="th" scope="row" sx={{
                                    position: "sticky",
                                    left: 0,
                                    bgcolor: "background.paper",
                                    borderRight: 1
                                }}>
                                    {row.label}
                                </TableCell>
                                {Array.from(Array(24), () => i++).map(hour => <TableCell
                                    align="center">{`${day?.hour[hour][row.api_key]} ${row.unit}`}</TableCell>)}

                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        // </Paper>
    )
}

export default DataTable