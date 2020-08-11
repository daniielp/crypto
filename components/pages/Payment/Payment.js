import React, { useState } from 'react';
import { makeStyles, Button, Box, Container, Paper, TextField } from '@material-ui/core';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    paper: {
        width: '60%',
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            width: '80%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(2),
            marginTop: theme.spacing(5),
        }
    },
    form: {
        paddingTop: theme.spacing()
    },
    width: {
        width: '40%'
    },
    label: {
        color: theme.palette.text.primary,
        fontWeight: 'Bold'
    }
}))

export default function ImgMediaCard() {
    const classes = useStyles();

    const [cc, setCC] = useState({
        name: '',
        number: '',
        expiry: '',
        cvc: '',
        focus: '',

    })


    const handleInputFocus = (e) => {
        setCC({ ...cc, focus: e.target.name })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCC({ ...cc, [name]: value })
    }

    return (
        <Box height="80vh" display="flex" flexWrap="wrap">
            <Cards
                number={cc.number}
                name={cc.name}
                expiry={cc.expiry}
                cvc={cc.cvc}
                focused={cc.focus}
                locale={{ valid: 'Expiration Date' }}
            />
            <Container>
                <Box display="flex" justifyContent="center" marginTop={-30} paddingTop={15}>
                    <Paper className={classes.paper}>
                        <form className={classes.form}>
                            <TextField
                                id="creditCard"
                                label="Credit Number"
                                name="number"
                                placeholder="Insert credit card number here"
                                helperText="Your credit card number should look as following: #### #### #### ####"
                                fullWidth
                                margin="normal"
                                onFocus={handleInputFocus}
                                onChange={handleInputChange}
                                inputProps={{
                                    pattern: "[0-9]{13,16}"
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                    className: classes.label
                                }}
                            />
                            <TextField
                                id="cardName"
                                type="text"
                                name="name"
                                label="Cardholder name"
                                placeholder="Insert the name of the cardholder"
                                fullWidth
                                margin="normal"
                                onFocus={handleInputFocus}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    shrink: true,
                                    className: classes.label
                                }}
                            />
                            <Box display="flex" justifyContent="space-between">
                                <TextField
                                    id="Expiration-date"
                                    label="Expiration Date"
                                    name="expiry"
                                    type="number"
                                    helperText="The expiration date is in the right hand corner"
                                    className={classes.width}
                                    placeholder="Insert expiration date"
                                    margin="normal"
                                    onFocus={handleInputFocus}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        className: classes.label
                                    }}
                                />
                                <TextField
                                    id="CVC"
                                    label="CVC"
                                    name="cvc"
                                    type="number"
                                    className={classes.width}
                                    placeholder="Insert CVC"
                                    helperText="Find the 3 digits on the back of your credit card"
                                    margin="normal"
                                    onFocus={handleInputFocus}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        className: classes.label
                                    }}
                                />
                            </Box>
                            <Button fullWidth variant="contained" color="secondary" type="submit">Submit</Button>
                        </form>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}