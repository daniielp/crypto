import React from 'react'
import { makeStyles, Typography, Link, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundColor: theme.palette.primary.light
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <Box py={2} className={classes.bg} component="footer">
            <Typography variant="body2" color="textPrimary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://shorcy.com">Shorcy.com</Link>
                {` ${new Date().getUTCFullYear()}.`}
            </Typography>
        </Box>
    )
}

export default Footer
