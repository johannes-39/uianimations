import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Paper} from '@mui/material';


type FooterProps = {
    prevClick: () => void;
    nextClick: () => void;
    activeStep: number;
}
const Footer = ({...props}: FooterProps) => {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <BottomNavigationAction label="Zurück" icon={<ArrowBackIosIcon/>} onClick={props.prevClick}
                                        disabled={props.activeStep === 1}
                                        sx={{opacity: props.activeStep === 1 ? '0.1' : '1'}}/>
                <BottomNavigationAction label={props.activeStep === 3 ? "Absenden" : "Weiter"}
                                        icon={<ArrowForwardIosIcon/>} onClick={props.nextClick}/>
            </BottomNavigation>
        </Paper>
    );
}
export default Footer
