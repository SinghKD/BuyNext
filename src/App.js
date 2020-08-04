import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Cart from "./Cart"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Catalogue from "./components/Catalogue"
import {DetailProvider} from "./Context"
import ProductDetail from './PoductDetail';


function App() {
  return (
    <DetailProvider>
      <Router>
        <div className="App">
          <title>BuyNext</title>
          <Nav />
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/details" component={ProductDetail}/>
            <Route component={Nope} />
          </Switch>
        </div>
      </Router>
    </DetailProvider>
  );
}

function Home(){
  return(
    <div style={{paddingTop: "50px", paddingBottom: "50px"}}>
      <p><i>"Wish I knew about this website earlier. fml."</i></p>
      <i>-  Thanos, a mad titan</i>
      <Catalogue />
    </div>
  )
}

function Nope(){
  return(
    <div>
      <h1 style={{ paddingTop: "50px"}}>Page not found</h1>
    </div>
  )
}

export default App;
