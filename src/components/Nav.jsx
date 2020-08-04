import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Badge} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { DetailContext } from '../Context';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Major Mono Display',
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
        fontSize: '2.5rem'
      },
  },
  badge:{
    backgroundColor: 'white',
    color: 'black'
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {

    backgroundColor: 'white',
    color: 'black'
  },
}))(Badge);


export default function Nav(props) {
  const classes = useStyles();

  const buttonStyle = {
      color: 'white'
  }

  const data = useContext(DetailContext);

  return (
    <div className={classes.root}>
            <AppBar position="static" style={{background: 'black'}} >
            <Toolbar>
                <Link to='/' style={buttonStyle}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <HomeRoundedIcon fontSize='large'/>
                    </IconButton>
                </Link>

                <Typography variant="h1" className={classes.title} style={{paddingBottom: "12px"}}>
                    BuyNext
                </Typography>

                <Link style = {buttonStyle} to='/cart'>
                    <Button color="inherit">
                      <StyledBadge badgeContent={data.cart.length}  > 
                        <ShoppingCartRoundedIcon fontSize='large'/>
                      </StyledBadge>
                    </Button>
                </Link>
            </Toolbar>
            </AppBar> 
    </div>
  );
}
