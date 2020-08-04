import React from 'react';
import '../../App.css';
import {Typography, makeStyles, Button, Box} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme=>({
  textStyle:{
    paddingTop: '70px',
    fontFamily: 'Righteous',
    paddingBottom: '50px'
  },
  btn:{
    marginTop: '50px',
   
   '&:hover':{
       fontWeight: '700',
   },
},

}));

function Empty() {

  const classes = useStyles();

  return (
    <div>
      <Typography variant='h2'
                  className={classes.textStyle}>
        CART IS EMPTY
      </Typography>
      <Box>
        <img src="images/impossible.jpg" alt="impossible" style={{width: '460px'}}/>
      </Box>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Button variant='outlined' className={classes.btn}>
          Back to Catalogue
        </Button>
      </Link>
    </div>
  );
}

export default Empty;