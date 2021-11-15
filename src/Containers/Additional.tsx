import React from "react";
import {ForecastDay} from "../API/TS_API_Response";
import DataGraph from "./Additional/DataGraph";
import DataTable from "./Additional/DataTable";

function Additional({day}: { day: ForecastDay | undefined }) {
    return (
        <>
            <DataTable day={day}/>
            <DataGraph day={day}/>
        </>
    )
}

export default Additional