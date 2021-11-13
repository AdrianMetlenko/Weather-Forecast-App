import {
    Box,
    Typography,
    Paper, Table, TableCell, TableBody, TableContainer, TableRow, TableHead
} from "@mui/material";
import {ForecastDay} from "../../API/API_Response";

function TabContent(day: ForecastDay, index: number, selectedDay: number) {
    return (
        <TableContainer
            component={Paper}
            role="tabpanel"
            hidden={index !== selectedDay}
            id={`day-tabpanel-${index}`}
            aria-labelledby={`day-tab-${index}`}
        >
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*{rows.map((row) => (*/}
                    {/*    <TableRow*/}
                    {/*        key={row.name}*/}
                    {/*        sx={{'&:last-child td, &:last-child th': {border: 0}}}*/}
                    {/*    >*/}
                    {/*        <TableCell component="th" scope="row">*/}
                    {/*            {row.name}*/}
                    {/*        </TableCell>*/}
                    {/*        <TableCell align="right">{row.calories}</TableCell>*/}
                    {/*        <TableCell align="right">{row.fat}</TableCell>*/}
                    {/*        <TableCell align="right">{row.carbs}</TableCell>*/}
                    {/*        <TableCell align="right">{row.protein}</TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TabContent