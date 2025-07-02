import React, {useEffect, useState} from 'react'
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
    const targetDate = new Date('2025-07-31T00:00:00');

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);

        return { days, hours, minutes };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 60 * 1000); // alle Minute aktualisieren

        return () => clearInterval(timer);
    }, []);

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >{
                props.activeStep < 4 &&

                <BottomNavigationAction label="Zurück" icon={<ArrowBackIosIcon/>} onClick={props.prevClick}
                                        disabled={props.activeStep === 1}
                                        sx={{opacity: props.activeStep === 1 ? '0.1' : '1'}}/> }
                <BottomNavigationAction label={`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}`}
                                        disabled={true}/>{
                    props.activeStep < 4 &&
                    <BottomNavigationAction label={props.activeStep === 3 ? "Absenden" : "Weiter"}
                                        icon={<ArrowForwardIosIcon/>} onClick={props.nextClick}/>}
            </BottomNavigation>
        </Paper>
    );
}
export default Footer
