import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import {HiHome } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";
import { createBrowserHistory } from "history";

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

const history = createBrowserHistory()

function App() {
  return (
    <Router history = {history}>
      {/* <header>
        <p id="titleGroup">Kelompok 30</p>
      </header> */}
      <Switch>
      <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/currency">
          <Currency />
        </Route>
        <Route path="/base">
          <BaseConvertor />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/API">
          <ApiInfo />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
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
