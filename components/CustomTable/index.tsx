import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import InputLabel from '@mui/material/InputLabel';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage';
import Link from 'next/link'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: theme.palette.common.black,
        padding: "10px 20px",
        backgroundColor: "#0B354C",
        // color: theme.palette.common.white,
        color: "#00D2FF",
        border: "3px solid #102841",
        borderRadius: "10px"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
                sx={{
                    margin: "0 10px", padding: "12px 10px", background: "#1B6A97", borderRadius: "5px", color: "#fff",
                    '&.Mui-disabled': {
                        background: "#0E1B29", color: "#324353"
                    }
                }}
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <KeyboardDoubleArrowLeftIcon sx={{ fontSize: "16px" }} />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
                sx={{
                    margin: "0 10px", padding: "12px 7px", background: "#1B6A97", borderRadius: "5px", color: "#fff",
                    '&.Mui-disabled': {
                        background: "#0E1B29", color: "#324353"
                    }
                }}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeftIcon sx={{ fontSize: "16px" }} />}
            </IconButton>
            <Typography color="#fff" sx={{ margin: "0 18px", fontSize: "14px" }}>{`Page ${page + 1} of ${Math.ceil(count / rowsPerPage)}`}</Typography>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
                sx={{
                    margin: "0 10px", padding: "12px 7px", background: "#1B6A97", borderRadius: "5px", color: "#fff",
                    '&.Mui-disabled': {
                        background: "#0E1B29", color: "#324353"
                    }
                }}
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight sx={{ fontSize: "16px" }} />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
                sx={{
                    margin: "0 10px", padding: "12px 10px", background: "#1B6A97", borderRadius: "5px", color: "#fff",
                    '&.Mui-disabled': {
                        background: "#0E1B29", color: "#324353"
                    }
                }}
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <KeyboardDoubleArrowRightIcon sx={{ fontSize: "16px" }} />}
            </IconButton>

        </Box>
    );
}


function createData(name: string, txnId: string, type: string, time: string, amount: number, mintAddress: string) {
    return { name, txnId, type, time, amount, mintAddress };
}

const rows = [
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
    createData('Decimus #356', '26JM5 ... D3W', 'Sale', '24 minutes ago', 4.29, 'DAYJT ... kJ1'),
].sort((a, b) => (a.amount < b.amount ? -1 : 1));

const CustomTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const _displayRows = () => {
        return ``
        // return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
    }

    return (
        <TableContainer component={Paper} sx={{ backgroundColor: "#102841", boxShadow: "none" }}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">NAME</StyledTableCell>
                        <StyledTableCell align="left">TXN ID</StyledTableCell>
                        <StyledTableCell align="left">TYPE</StyledTableCell>
                        <StyledTableCell align="left">TIME</StyledTableCell>
                        <StyledTableCell align="left">AMOUNT</StyledTableCell>
                        <StyledTableCell align="left">MINT ADDRESS</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" align="left" scope="row" sx={{ padding: "15px 25px", width: "20%", borderBottom: "1px solid #0C4258", color: '#fff' }}>
                                <img src="assets/images/nft_sm.png" style={{ marginRight: "10px" }} alt="" />
                                {row.name}
                            </TableCell>
                            <TableCell style={{ width: "16%" }} align="left" sx={{ padding: "15px 25px", borderBottom: "1px solid #0C4258", color: '#fff' }}>
                                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                    <span>{row.txnId}</span>
                                    <Link href="/"><img src="assets/images/link_icon.png" alt="" style={{ cursor: "pointer" }} /></Link>
                                </Box>
                            </TableCell>
                            <TableCell style={{ width: "16%" }} align="left" sx={{
                                padding: "15px 25px", borderBottom: "1px solid #0C4258", color: '#7FF9E6'
                            }}>
                                {row.type}
                            </TableCell>
                            <TableCell style={{ width: "16%" }} align="left" sx={{ padding: "15px 25px", borderBottom: "1px solid #0C4258", color: '#fff' }}>
                                {row.time}
                            </TableCell>
                            <TableCell style={{ width: "16%" }} align="left" sx={{ padding: "15px 25px", borderBottom: "1px solid #0C4258", color: '#fff' }}>
                                {row.amount} ◎
                            </TableCell>
                            <TableCell style={{ width: "16%" }} align="left" sx={{ padding: "15px 25px", borderBottom: "1px solid #0C4258", color: '#fff' }}>
                                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                    <span>{row.mintAddress}</span>
                                    <Link href="/"><img src="assets/images/link_icon.png" alt="" style={{ cursor: "pointer" }} /></Link>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} sx={{ borderBottom: "1px solid #0C4258", color: '#fff' }} />
                        </TableRow>
                    )}
                </TableBody>

            </Table>
            {/* <Box sx={{ borderBottom: "1px solid transparent", '& .MuiPagination-select': { display: "none" } }}>
                <TablePagination
                    sx={{ borderBottom: "1px solid transparent", '& .MuiTablePagination-selectLabel, & .MuiTablePagination-select': { display: "none !important" } }}
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    labelDisplayedRows={_displayRows}
                    labelRowsPerPage="Show"
                    SelectProps={{
                        inputProps: {
                            'aria-label': 'Show',
                        },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </Box> */}
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button sx={{ margin: "0 5px", padding: "12px 8px", minWidth: "0", background: "#0E1B29", color: "#324353" }}>
                        <KeyboardDoubleArrowLeftIcon sx={{ fontSize: "16px", fontWeight: "bold" }} />
                    </Button>
                    <Button sx={{ margin: "0 5px", padding: "12px 8px", minWidth: "0", background: "#0E1B29", color: "#324353" }}>
                        <KeyboardArrowLeftIcon sx={{ fontSize: "16px", fontWeight: "bold" }} />
                    </Button>
                    <Typography color="#fff" sx={{ margin: "0 18px", fontSize: "14px" }}>Page 1 of 50</Typography>
                    <Button sx={{ margin: "0 5px", padding: "12px 8px", minWidth: "0", background: "#1B6A97", color: "#fff" }}>
                        <KeyboardArrowRight sx={{ fontSize: "16px", fontWeight: "bold" }} />
                    </Button>
                    <Button sx={{ margin: "0 5px", padding: "12px 8px", minWidth: "0", background: "#1B6A97", color: "#fff" }}>
                        <KeyboardDoubleArrowRightIcon sx={{ fontSize: "16px", fontWeight: "bold" }} />
                    </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ marginRight: "9px", color: '#fff', fontSize: "14px" }}>Go to Page</InputLabel>
                    <input type="text" style={{ paddingLeft: "10px", width: "67px", height: "39px", outline: "none", backgroundColor: "#13202D", color: "#fff", borderRadius: "5px", border: "1px solid #1B6A97", fontSize: "14px" }} defaultValue="1" />
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ margin: "0 9px", color: '#fff', fontSize: "14px" }}>Show</InputLabel>
                    <select style={{ padding: "10px", width: "102px", outline: "none", border: "1px solid #1B6A97", backgroundColor: "#13202D", borderRadius: "5px", color: "#fff" }}>
                        <option>10</option>
                        <option>25</option>
                        <option>100</option>
                        <option>All</option>
                    </select>
                </Box>
            </Box>
        </TableContainer >
    )
}

export default CustomTable