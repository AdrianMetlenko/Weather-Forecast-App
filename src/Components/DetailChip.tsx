import {Box, Chip, Typography} from "@mui/material";
import React from "react";

function DetailChip(icon: any, color: any, valueLabel: string, attribute: string) {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', m: 1/2, alignItems: 'center'}}>
            <Chip
                icon={icon}
                color={color}
                label={
                    <Chip
                        label={<Typography sx={{fontSize:'1rem'}}>{valueLabel}</Typography>}
                        sx={{bgcolor: 'white', ml: 1}}
                    />}
                sx={{height: '3rem', borderRadius: '1.5rem'}}
            />
            <Typography sx={{fontWeight:'100', fontSize:'0.8rem'}}>{attribute}</Typography>
        </Box>
    )
}

export default DetailChip