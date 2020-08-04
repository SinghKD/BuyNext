import React from 'react';
import {DetailContext} from './Context'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography, Button} from '@material-ui/core'

const useStyles = makeStyles(theme=> ({
    gridContainer:{
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '80px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center"
        },
    },
    gridItem: {
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '100px',
            paddingRight: '20px',
        }, 
        [theme.breakpoints.down('md')]: {
            paddingTop: '50px',
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center"
        }, 
        paddingLeft: '40px',
        paddingRight: '40px',
    },
    gridImage:{
        [theme.breakpoints.up('xl')]: {
            paddingLeft: '300px',
            paddingRight: '20px',
            
        }, 
    },
    btn:{
        '&:hover':{
            fontWeight: '700',
        },
    }
        
  }));


function ProductDetail() {

    const {products, detailProduct} = useContext(DetailContext);
    const data = useContext(DetailContext);

    const classes = useStyles();

    return (
        <div>
            <Grid container
                direction="row"
                className={classes.gridContainer}
                spacing="4"
                justify="center"
                >
                <Grid item >
                    <img src={detailProduct.image} 
                         alt="productImage" 
                         className={classes.gridImage}/>
                </Grid>
                <Grid item container xs
                    direction="column"
                    justify="space-between"
                    alignItems="baseline"
                    >
                    <Grid item>
                        <Typography gutterbottom variant="h2" 
                                    className={classes.gridItem} 
                                    style={{fontFamily: 'Righteous'}}>
                                    {detailProduct.name}
                        </Typography>
                        <Typography variant="h5" 
                                    align="left" 
                                    className={classes.gridItem} 
                                    style={{fontFamily: 'Raleway', 
                                            fontWeight: 580, 
                                            fontStyle: 'italic'}}>
                                            Price: ${detailProduct.price}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" 
                                    align="left" 
                                    className={classes.gridItem} 
                                    style={{fontFamily: 'Raleway'}}>
                                    {detailProduct.info}
                        </Typography>
                    </Grid>
                    <Grid item container 
                        justify="flex-start"
                        alignItems="center"
                        spacing="3" 
                        className={classes.gridItem}>
                        <Grid item>
                            {detailProduct.inCart? 
                                <Link to="/cart" style={{ textDecoration: 'none' }}>
                                <Button variant="outlined">
                                    Go to Cart
                                </Button>
                                </Link>
                                :
                                <Button variant="outlined" className={classes.btn}
                                onClick={()=>{data.addToCart(detailProduct.id)}}>
                                    Add to cart
                                </Button>
                            }       
                        </Grid>
                        <Grid item>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" className={classes.btn}>
                                    Continue Shopping
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductDetail;