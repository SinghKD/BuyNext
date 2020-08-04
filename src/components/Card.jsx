import React, {useContext} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {Link} from 'react-router-dom'
import {DetailContext} from "../Context"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 500,
  },
  media: {
    height: 350,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 1s linear',
    '&:hover':{
      transform: 'scale(1.1)'
    }
  },
  text:{
      fontFamily: 'Montserrat'
  },
  btn:{
      color: 'black'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  const data = useContext(DetailContext);

  return (
    <Card className={classes.root} >
      <CardActionArea >
        <Link to="/details">
        <CardMedia
          className={classes.media}
          image={props.product.image}
          title="Click for details"
          onClick={()=>{data.showDetail(props.product.id)}}
        />
        </Link>
        
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.text}>
            {props.product.name}
          </Typography>
          <Typography variant="overline" gutterBottom>
              ${props.product.price}
          </Typography>
          {/* <Typography variant="body2" component="p">
            {props.product.info}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
 
        <Button size="small" 
          title={props.product.inCart? "Go to Cart":"Add to Cart"}
          className={classes.btn}
          onClick={(!props.product.inCart)? ()=>{data.addToCart(props.product.id)}: null}>
          {props.product.inCart? 
          <Link to="/cart">
            <ShoppingCartIcon className={classes.btn}/>
          </Link> 
          : 
          <AddShoppingCartRoundedIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}
