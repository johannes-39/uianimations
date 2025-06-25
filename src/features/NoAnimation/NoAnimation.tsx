import React from 'react'
import ObjectHeader from "@/components/ObjectHeader/ObjectHeader";
import {Button, Stack} from "@mui/material";

const NoAnimation = () => {
    return (
        <Stack spacing={1} alignItems="flex-start">
            <ObjectHeader label={"button"}>
                <Button
                    sx={{
                        all: 'unset',
                        cursor: 'pointer',
                    }}
                >
                    Nackter Button
                </Button>


            </ObjectHeader>

        </Stack>
    )
}
export default NoAnimation
