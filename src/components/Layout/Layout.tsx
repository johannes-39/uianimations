'use client'
import React from 'react'
import {Box} from "@mui/material";
import Header from "@/components/Header/Header";

const Layout = ({...props}) => {
    return (
        <><Header/><Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            {props.children}</Box>
        </>

    )
}
export default Layout
