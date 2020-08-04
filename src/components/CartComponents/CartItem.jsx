import React from 'react';
import '../../App.css';
import {Grid, makeStyles, Button, ButtonGroup, Box} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme=>({
    heading2:{
        fontFamily: 'Raleway',
        fontWeight: '500'
      },
    grid:{
        [theme.breakpoints.down('md')]: {
            paddingBottom: '50px'
          },
    }
  }));

function CartItem(props) {

    const classes = useStyles();

  return (
    <div>
        <Grid container
            spacing='3'
            justify='space-evenly'
            alignItems='center'
            className={classes.grid}
            >
            <Grid item xs={12} md={2}>
              <img src={props.product.image} alt="pic." style={{width: '150px'}}/>
            </Grid>
            <Grid item xs={12} md={2}>
                <Box display={{ xs: 'inline-block', md: 'none' }} 
                     className={classes.heading2}>Product: :</Box>
                     {props.product.name}
            </Grid>
            <Grid item xs={12} md={2}>
                <Box display={{ xs: 'inline-block', md: 'none' }} 
                     className={classes.heading2}>Price: :</Box>
                     ${props.product.price}
            </Grid>
            <Grid item xs={12} md={2}>
                <ButtonGroup variant="text">
                    <Button onClick={()=>props.data.decreaseQuantity(props.product.id)}>-</Button>
                    <Button>{props.product.count}</Button>
                    <Button onClick={()=>props.data.increaseQuantity(props.product.id)}>+</Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12} md={2}>
                <Button onClick={()=>props.data.removeProduct(props.product.id)}><DeleteIcon /></Button>
            </Grid>
            <Grid item xs={12} md={2}>
                <Box display={{ xs: 'inline-block', md: 'none' }} className={classes.heading2}>Total: :</Box>
                <strong> ${props.product.total}</strong>
            </Grid>
            
        </Grid>
    </div>
  );
}

export default CartItem;