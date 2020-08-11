import React from 'react'
import { Container, Box, Typography, makeStyles, TextField, Button } from '@material-ui/core'
import Illustration from '../../../../../Illustrations/intro.svg'


const useStyles = makeStyles((theme) => ({
    media: {
        width: '100%',
        height: '100%',
    },
    bold: {
        fontWeight: 'Bold'
    },
    medium: {
        fontWeight: '500'
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(4)
    },
    textfield: {
        width: '70%',
        marginRight: theme.spacing(5)
    },
    label: {
        color: theme.palette.text.primary
    }
}))

const Introduction = () => {
    const classes = useStyles()

    return (
        <Container fixed>
            <Box component={"section"} height="80vh" display="flex" justifyContent="center" alignItems="center">
                <Box width="50%" fontWeight="fontWeightBold" className={classes.box}>
                    <Typography variant="h6" color="textPrimary" className={classes.medium}>The best place to</Typography>
                    <Typography variant="h4" color="textPrimary" className={classes.bold}>Buy and sell cryptocurrency</Typography>
                    <Typography variant="body1" color="textPrimary">Crypto is the perfect platform for helping you get started with cryptocurrency</Typography>
                    <form className={classes.form}>
                        <TextField 
                            label="Email" 
                            variant="filled" 
                            color="secondary" 
                            type="Email" 
                            className={classes.textfield}
                            InputLabelProps={{
                                className: classes.label
                            }}
                            />
                        <Button variant="contained" color="secondary" display="flez">Submit</Button>
                    </form>
                </Box>
                <Box width="50%">
                    <img src={Illustration} alt="Illustration" className={classes.media} />
                </Box>
            </Box>
        </Container>
    )
}

export default Introduction
