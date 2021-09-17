import NavBar from "components/NavBar/NavBar";
import Home from "pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GitSearch from "pages/GitSearch";
const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/gitsearch">
          <GitSearch></GitSearch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
