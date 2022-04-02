import React, { Fragment, useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Sidebar from '../../components/Sidebar'
import styles from "../../styles/ItemDetails.module.scss"

export default function ItemDetails() {
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {

    }, [])

    return (
        <Fragment>
            <Sidebar activeKey={1} />
            {/* <CssBaseline /> */}
            <div className={styles.container}>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                </Box>
            </div>
        </Fragment>
    )
}