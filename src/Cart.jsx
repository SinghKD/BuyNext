import React, { Fragment } from 'react';
import './App.css';
import {Typography, makeStyles, Box} from '@material-ui/core'
import Columns from './components/CartComponents/Columns'
import { useContext } from 'react';
import { DetailContext } from './Context';
import Empty from './components/CartComponents/Empty'
import CartList from './components/CartComponents/CartList'
import Total from "./components/CartComponents/Total"

const useStyles = makeStyles(theme=>({
  heading:{
    paddingTop: '30px',
    paddingBottom: '40px',
    fontFamily: 'Righteous'
  },

}));

function Cart() {

  const classes = useStyles();
  const data = useContext(DetailContext);

  return (
    <div>

      {(data.cart.length > 0)?
      <Fragment>
        <Typography variant='h3'
                    className={classes.heading}>
          YOUR CART
        </Typography>
      <Box display={{ xs: 'none', md: 'block'}}>
      <Columns />
      </Box>
      <CartList data={data}/>
      <Total data={data}/>
      </Fragment>
      :
      <Empty />
      // <Total data={data}/>
      }
      
    </div>
  );
}

export default Cart;