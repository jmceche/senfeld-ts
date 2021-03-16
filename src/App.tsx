import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Details from "./views/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/season/:season/episode/:episode">
          <Details />
        </Route>
        <Route path="*">
          <NotFound />)
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
