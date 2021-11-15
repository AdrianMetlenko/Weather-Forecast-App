import {Box, CircularProgress, Typography} from "@mui/material";

function Loading(){
    return(
        <Box sx={{justifyContent: 'center', width: 1, display:'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography sx={{m:1}} variant={'h6'}>Loading...</Typography>
            <CircularProgress sx={{m:1}}/>
        </Box>
    )
}

export default Loading