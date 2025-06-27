import React from 'react'
import Tooltip, {TooltipProps} from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {IconButton} from "@mui/material";


const CustomToolTip = ({...props}: TooltipProps) => {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return (

        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <Tooltip {...props} slotProps={{
                    popper: {
                        disablePortal: true,
                    },
                }} onClose={handleTooltipClose}
                         open={open}
                         disableFocusListener
                         disableHoverListener
                         disableTouchListener>
                    <IconButton size={"small"} onClick={handleTooltipOpen}>{props.children}</IconButton>
                </Tooltip>

            </div>
        </ClickAwayListener>
    );
}
export default CustomToolTip
