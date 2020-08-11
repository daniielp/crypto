import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Container, Box, Typography, AppBar, Tabs, Tab } from '@material-ui/core'
import Vault from '../../../../../Illustrations/vault.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    header: {
        marginTop: theme.spacing(3)
    },
    bold: {
        fontWeight: 'bold'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    media: {
        width: '25%',
        height: '25%',
    },
    background: {
        backgroundColor: theme.palette.primary.light
    }
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props
    return (
        <Typography component="div" role="tabpanel" hidden={value !== index} id={`wrapped-tabpanel-${index}`} aria-labelledby={`wrapped-tab-${index}`} {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}

function a11yProps(index) {
    return {
        id: `wrapped-tabpanel-${index}`,
        'aria_controls': `wrapped-tabpanel-${index}`,
    }
}

const Info = () => {
    const classes = useStyles()
    const [value, setValue] = useState('one')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Container className={classes.header}>
            <Box my={5}>
                <Typography variant="h4" align="center" color="textPrimary" className={classes.bold}>Create your wallet today</Typography>
                <Typography variant="body2" align="center">Crypto has a variety of features that makes it the best place to start trading</Typography>
            </Box>
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aira-label="tabs" centered>
                        <Tab value="one" label="Secure Vault" wrapped {...a11yProps('one')} />
                        <Tab value="two" label="Anonymous" {...a11yProps('two')} />
                        <Tab value="three" label="Anonymous" {...a11yProps('three')} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index="one" className={classes.background}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h6">Store your favorit cryptocurrency in a safe place</Typography>
                        <img src={Vault} alt="vault" className={classes.media} />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index="two" className={classes.background}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h6">Keep your privacy hidden</Typography>
                        <img src={Vault} alt="vault" className={classes.media} />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index="three" className={classes.background}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h6">Store your favorit cryptocurrency in a safe place</Typography>
                        <img src={Vault} alt="vault" className={classes.media} />
                    </Box>
                </TabPanel>
            </div>
        </Container>
    )
}

export default Info
