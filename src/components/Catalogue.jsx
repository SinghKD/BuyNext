import React, {useContext} from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {DetailContext} from "../Context"

const useStyles = makeStyles(theme=> ({
    gridContainer:{
        paddingLeft: '90px',
        paddingRight: '20px',
        paddingTop: '80px',
        paddingBottom: '50px',
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '40px',
            paddingRight: '40px',
          }, 
    }
  }));

function Catalogue() {
    const classes = useStyles();

    const data = useContext(DetailContext);

    return (
    <div>
        <Grid container 
            spacing={8} 
            className={classes.gridContainer}
            justify='space-around'
            alignItems="center">
                {data.products.map(product => 
                    <Grid item xs={12} sm={6} md={4} align='center'>
                        <Card key={product.id} product={product}/>
                    </Grid>)}
        </Grid>
    </div>
  );
}

export default Catalogue;