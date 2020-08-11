import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import Logo from '../../Icons/Logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
    textDecoration: 'none'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to="/">
              <img src={Logo} className={classes.title} alt="logo" />
            </Link>
          </IconButton>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            Crypto
          </Typography>
          <Button><Link to="/payment" className={classes.link}>Prices</Link></Button>
          <Button><Link to="/software" className={classes.link}>Software</Link></Button>
          <Button><Link to="/support" className={classes.link}>Support</Link></Button>
          <Button variant="contained" color="secondary"><Link to="/account" className={classes.link}>Account</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}