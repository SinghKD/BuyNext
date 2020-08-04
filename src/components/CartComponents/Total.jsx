import React, { Fragment } from 'react';
import '../../App.css';
import {Typography, makeStyles, Grid, Button, Box} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    grid:{
        paddingTop: '50px',
        [theme.breakpoints.up('md')]: {
            paddingRight: '120px',
            alignItems: 'flex-end'
        },
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center'
        },
    },
   btn:{
        marginRight: '10px',
       
       '&:hover':{
           background: '#E8F5E9',
           borderColor: '#689F38',
           color: '#689F38',
           fontWeight: '700',
       },
   },
   btn2:{
    '&:hover':{
        background: '#FFEBEE',
        borderColor: '#E53935',
        color: '#E53935',
        fontWeight: '700',
        },
    },
   text:{
       fontFamily: 'Raleway'
   }

}));

function Total(props) {

  const classes = useStyles();

  const data = props.data;

  return (
    <>
        <Grid container
              direction="column"
              spacing="2"
              justify="center"
              className={classes.grid}>
            <Grid item>
                <Typography variant='h6'className={classes.text}>
                Total: &nbsp; <Box display='inline' >$ <strong>{data.total}</strong></Box>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='h6'className={classes.text}>
                Tax: &nbsp; <Box display='inline' >$&ensp; <strong>{data.tax}</strong></Box>
                </Typography>
            </Grid>
            <Grid item>
                 <Typography variant='h6'className={classes.text}>
                Amount: &nbsp; <Box display='inline' >$ <strong>{data.amount}</strong></Box>
                </Typography>
            </Grid>
            <Grid item>
                <Button variant="outlined" 
                        className={classes.btn}>Checkout</Button>
                <Button variant="outlined" 
                        className={classes.btn2}
                        onClick={()=>data.clearCart()}>Clear Cart</Button>
            </Grid>
        </Grid>
    </>
  );
}

export default Total;