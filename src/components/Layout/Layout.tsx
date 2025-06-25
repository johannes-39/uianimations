'use client'
import React from 'react'
import {Box} from "@mui/material";

const Layout = ({...props}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >{props.children}</Box>
    )
}
export default Layout
