import React, {Dispatch, SetStateAction} from 'react'
import Button from "@/components/Button/Button";
import {Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import Box from "@mui/material/Box";
import ohmLogoRed from "../../../public/Logo_Th_Nurnberg.png";


type LoginPageProps = {
    setLoggedIn: Dispatch<SetStateAction<boolean>>;
}
const LoginPage = ({...props}:LoginPageProps) => {
    const handleLogIn = () => {
        props.setLoggedIn(true);
    }
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box sx={{p: 2, marginTop: 2}}>
            <Box
                component="img"
                src={ohmLogoRed.src}
                alt="Logo"
                sx={{width: '100%', p: 3, height: 'auto'}}
            />
            <ObjectHeader>
                <Stack spacing={3} sx={{p: 4}}>

                    <TextField
                        required
                        id="outlined-required"
                        label="E-Mail"
                        defaultValue="mustermannma12345@th-nuernberg.de"
                    />
                    <FormControl  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button onClick={handleLogIn}>Anmelden</Button>
                </Stack>
            </ObjectHeader>
        </Box>



    )
}
export default LoginPage
