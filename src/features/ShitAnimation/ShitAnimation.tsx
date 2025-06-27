import React from 'react'
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import CustomButton from "@/components/Button/Button";
import {Stack} from "@mui/material";

const ShitAnimation = () => {
    return (
        <Stack spacing={1} alignItems="flex-start">
            <ObjectHeader label={"button"}>
                <CustomButton
                    sx={{
                        animation: 'wobble 0.6s infinite ease-in-out',
                        transform: 'rotate(1deg)',
                        backgroundColor: 'orange',
                        fontSize: '1.5rem',
                        borderRadius: '20% 5%',
                        color: 'white',
                        ':hover': {
                            transform: 'scale(1.1) rotate(3deg)',
                            backgroundColor: 'tomato',
                        },
                        transition: 'all 0.2s ease-in-out',
                        '@keyframes wobble': {
                            '0%': {transform: 'rotate(1deg) translateX(0px)'},
                            '25%': {transform: 'rotate(2deg) translateX(2px)'},
                            '50%': {transform: 'rotate(-2deg) translateX(-2px)'},
                            '75%': {transform: 'rotate(3deg) translateX(1px)'},
                            '100%': {transform: 'rotate(1deg) translateX(0px)'},
                        },
                    }}
                >Test Button</CustomButton>

            </ObjectHeader>

        </Stack>
    )
}
export default ShitAnimation
