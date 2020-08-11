import React from 'react'
import { makeStyles, Container, Box, Typography, Button } from '@material-ui/core'
import SignUp from '../../../../../Illustrations/SignUp.svg'

const useStyles = makeStyles((theme) => ({
    bold: {
        fontweight: 'bold'
    },
    spacing: {
        marginTop: theme.spacing(3),
    },
    media: {
        width: '75%',
        height: '75%'
    }
}))

const Signup = () => {
    const classes = useStyles()

    return (
        <Container>
            <Box my={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h4" align="center" color="textPrimary" className={classes.bold}>Keep your privacy hidden</Typography>
                <Typography variant="body2" align="center">Setup a vault with Crypto</Typography>
                <img src={SignUp} alt="Sign up" className={classes.media}/>
                <Button className={classes.spacing} variant="contained" color="secondary">Get started now</Button>
            </Box>
        </Container>
    )
}

export default Signup
