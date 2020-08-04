import React from 'react';
import {Grid, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  heading2:{
    fontFamily: 'Raleway',
    fontWeight: '500'
  },
}));

function Columns() {

  const classes = useStyles();

  return (
    <div>
      <Grid container
            spacing='3'
            justify='space-evenly'
            alignItems='center'
            >
            <Grid item md={2}>
              
            </Grid>
            <Grid item md={2}>
              <Typography className={classes.heading2} variant='h5'>  
                Product
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Typography className={classes.heading2} variant='h5'>  
                Price
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Typography className={classes.heading2} variant='h5'>  
                Quantity
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Typography className={classes.heading2} variant='h5'>  
                Remove
              </Typography>
            </Grid>
            <Grid item className={classes.item} md={2}>
              <Typography className={classes.heading2} variant='h5'>  
                Total
              </Typography>
            </Grid>
      </Grid>
    </div>
  );
}

export default Columns;