import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";

import "./App.css";
import Currency from "./calculator/currency";
import Info from "./profile/info";
import BaseConvertor from "./calculator/BaseConverter"
import Calculator from "./calculator/calculator";
import ApiInfo from "./profile/apiInfo";
import Author from "./profile/author";
import Home from "./home";
import Detail from "./detail/detail";
import DetailPage from "./detail/detailPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/calculator">
          <Calculator />
        </Route>
        <Route exact path="/currency">
          <Currency />
        </Route>
        <Route exact path="/base">
          <BaseConvertor />
        </Route>
        <Route exact path="/info">
          <Info />
        </Route>
        <Route exact path="/API">
          <ApiInfo />
        </Route>
        <Route exact path="/author">
          <Author />
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
        <Route path="/detail/:detailId">
          <DetailPage />
        </Route>
      </Switch>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
        </NavLink>
        <NavLink to="/info" className="iconWrapper">
          <FaInfoCircle className="icon" />
        </NavLink>
      </footer>
    </Router>
  );
}

export default App;
