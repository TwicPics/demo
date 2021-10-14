import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Storefront from "./components/Storefront";
import ProductsListing from "./components/ProductsListing";
import ProductOverview from "./components/ProductOverview";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/storefront" component={Storefront} />
          <Route exact path="/products-listing" component={ProductsListing} />
          <Route exact path="/product-overview" component={ProductOverview} />
        </>
      </Router>
    </div>
  );
}

export default App;
