import React, {useState} from 'react'
import Button, {ButtonProps} from '@mui/material/Button';
type CustomButtonProps = {
    onClick?: () => void;
    loading?: boolean;
} & ButtonProps
const CustomButton = ({...props} : CustomButtonProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const handleButtonClick = () => {
        if (props.loading){
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setIsClicked(true)
            }, 1000)
        }
        props.onClick?.();
    }
    return (
            <Button {...props} sx={{
                ...{
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                },
                ...props.sx, }} loading={props.loading ? isLoading : false} onClick={handleButtonClick} color={isClicked ? "success" : undefined}>{props.children}</Button>
    )
}
export default CustomButton
