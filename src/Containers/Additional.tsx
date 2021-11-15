import {Box, Paper, Typography} from "@mui/material";
import React from "react";
import {ForecastDay} from "../API/TS_API_Response";
import DataGraph from "./Additional/DataGraph";
import DataTable from "./Additional/DataTable";

function Additional({day}: { day: ForecastDay | undefined }) {
    return (
        <>
            {/*<Box height={400} sx={{}}>*/}
                <DataTable day={day}/>
            {/*</Box>*/}
            {/*<Box height={400} sx={{m: 1}}>*/}
                <DataGraph day={day}/>
            {/*</Box>*/}
        </>
    )
}

export default Additional