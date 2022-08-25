import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Reset from './Reset';
import Dashboard from './Dashboard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import StateProvider from './context/StateContext';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Checkout from "./components/Checkout/Checkout";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import Contact from './components/Contact/Contact';



function App() {
  return (
    <StateProvider>
      <PayPalScriptProvider>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={Reset} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} /> 
            <Route exact path="/contact" component={Contact}/> 
            
          </Switch>
          <Footer />
          </Router> 
      </PayPalScriptProvider>  
    </StateProvider>
  );
}

export default App;
