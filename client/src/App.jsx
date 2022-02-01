import { BrowserRouter as Router, Switch,Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import ProductList from "./pages/ProductList";
import { useSelector } from "react-redux";

const App = () => {
  const userval = useSelector((state) => state.user.currentUser);
  const user = userval
  // let user;
  // if (userval != null) {
  //   user = true;
  // } else {
  //   user = false;
  // }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;