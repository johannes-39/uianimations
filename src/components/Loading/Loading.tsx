import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#ffffff",
        ...theme.applyStyles('dark', {
            backgroundColor: "#ffffff",
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: '#000000',
        ...theme.applyStyles('dark', {
            backgroundColor: '#000000',
        }),
    },
}));

type LoadingProps = {
    value?: number;
}
const Loading = ({...props}: LoadingProps) => {
    return (
        <Box sx={{ width: '100%' }}>
            <BorderLinearProgress variant={"determinate"} {...props}/>
        </Box>
    )
}
export default Loading

