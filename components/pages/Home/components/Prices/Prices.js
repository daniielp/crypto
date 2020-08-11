import React, { useEffect, useState } from 'react'
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, makeStyles, Container, TableBody, CircularProgress, Button } from '@material-ui/core'
import Chart from '../../../../../Illustrations/chart.svg'
import firebase from '../../../../db/firebase'

const useStyles = makeStyles((theme) => ({
    tableHead: {
        color: theme.palette.primary
    },
    tableRow: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.primary.secondary
    },
    tableContainer: {
        backgroundColor: 'fefefe',
        color: theme.palette.text.secondary
    }
}))


const Prices = () => {
    const classes = useStyles()
    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        firebase.getCrypto().then((snapshot) => setCryptos(snapshot.docs))
    }, [])

    const columns = [
        { id: 'Number', label: '#' },
        { id: 'Name', label: 'Name' },
        { id: 'Price', label: 'Price', align: 'right' },
        { id: 'Change', label: 'Change', align: 'right' },
        { id: 'Chart', label: 'Chart', align: 'right' },
        { id: 'Trade', label: 'Trade', align: 'right' },

    ]

    const cryptoList = cryptos.length ? (
        cryptos.map((crypto, i) => {
            const data = crypto.data()

            return (
                <TableRow key={crypto.id} className={classes.tableRow}>
                    <TableCell>{i}</TableCell>
                    <TableCell>{`${data.Name} ${data.Symbol}`}</TableCell>
                    <TableCell align="right">${data.Price}</TableCell>
                    <TableCell align="right">{data.Change}%</TableCell>
                    <TableCell align="right"><img src={Chart} alt="chart" /></TableCell>
                    <TableCell align="right"><Button variant="contained" color="secondary">Buy</Button></TableCell>
                </TableRow>
            )
        })
    ) : (
            <CircularProgress />
        )

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cryptoList}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

    )
}

export default Prices
