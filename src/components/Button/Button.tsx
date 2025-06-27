import React from 'react'
import Button, {ButtonProps} from '@mui/material/Button';

type CustomButtonProps = {
    onClick?: () => void;
    loading?: boolean;
} & ButtonProps
const CustomButton = ({...props}: CustomButtonProps) => {

    return (
        <Button sx={{
            ...props.sx, ...{
                transition: "0.3s linear",
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
            }
        }} {...props}>{props.children}</Button>
    )
}
export default CustomButton
