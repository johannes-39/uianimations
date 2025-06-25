import React from 'react'
import Button, {ButtonProps} from '@mui/material/Button';
type CustomButtonProps = {
    onClick?: () => void;
} & ButtonProps
const CustomButton = ({...props} : CustomButtonProps) => {
    return (
            <Button {...props}>{props.children}</Button>
    )
}
export default CustomButton
