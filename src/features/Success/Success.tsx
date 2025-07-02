import React from 'react'
import Button from "@/components/Button/Button";
import Box from "@mui/material/Box";
import {green} from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import {Stack, Typography} from "@mui/material";
import {fwpfs} from "@/features/Fwpfs/content";
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import BewerbungsFeld from "@/components/BewerbungsFeld/BewerbungsFeld";
import theme from "@/styles/theme";

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
        <Stack spacing={1} sx={{marginTop: 1, display: "flex", justifyContent: "center", textAlign: "center"}}>
            <Typography variant="body1" color={theme.palette.primary.main} paragraph>
                Erfolgreich abgesendet
            </Typography>
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
            {fwpfs.slice(0,2).map((value, index) => {
                    return (
                        <ObjectHeader sx={{
                            bgcolor: index < 5 ? `rgba(0, 180, 0, ${(10 - index * 2) / 20})` : index > 14 ? `rgba(255, 100, 100, ${(10 - (index - 19) * -2) / 20})` : '#ffffff'
                        }} key={value.label} label={value.label} value={value.auslastung} index={index}>
                        </ObjectHeader>)
                }
            )}
            <Button onClick={props.onClick}> Wahl überarbeiten</Button>
        </Stack>

    )
}
export default Success
