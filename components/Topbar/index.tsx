import React from 'react';
import { Box, Typography, Container, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    display: "flex",
    backgroundColor: 'transparent',
    ...theme.typography.body2,

    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "none"
}));


const Topbar = () => {
    return (
        <React.Fragment>
            <Box sx={{
                position: "fixed", width: "100%", background: "#071421", zIndex: "3"
            }}>
                <Container maxWidth="lg">
                    <Stack direction="row" spacing={5} sx={{ justifyContent: "center" }}>
                        <Item>
                            <Typography color="#fff" sx={{ fontSize: "14px" }}>Total Volume: &nbsp;</Typography>
                            <Typography color="#00d2ff" sx={{ fontSize: "14px" }}>2,5000,000 SOL</Typography>
                        </Item>
                        <Item>
                            <Typography color="#fff" sx={{ fontSize: "14px" }}>SOL/USD: &nbsp;</Typography>
                            <Typography color="#00d2ff" sx={{ fontSize: "14px" }}>$100.00</Typography>
                        </Item>
                        <Item>
                            <Typography color="#fff" sx={{ fontSize: "14px" }}>Solana Network: &nbsp;</Typography>
                            <Typography color="#00d2ff" sx={{ fontSize: "14px" }}>2500 TPS</Typography>
                        </Item>
                    </Stack>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Topbar