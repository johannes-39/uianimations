import React from 'react'
import Button from "@/components/Button/Button";
import Box from "@mui/material/Box";
import {green} from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import {Stack} from "@mui/material";

type SuccessProps = {
    onClick: () => void;
}

const Success = ({...props}: SuccessProps) => {
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            transform: 'scale(1.2)',
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };
    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };
    return (
        <Stack spacing={5} sx={{marginTop: 10, display: "flex", justifyContent: "center"}}>
            <Box sx={{display: "flex", justifyContent: "center", position: "relative"}}>
                <Fab
                    aria-label="save"
                    color="success"
                    sx={buttonSx}
                    onClick={handleButtonClick}
                >
                    <CheckIcon/>
                </Fab>
            </Box>
            <Button onClick={props.onClick}> Wahl überarbeiten</Button>
        </Stack>

    )
}
export default Success
