import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Booklist from './components/Booklist';
import NoMatch from './components/NoMatch';
import Saved from './components/Saved';

// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Navbar />
      <Jumbotron />
      <Switch>
        <Route exact path={["/", "/search"]}>
          <Booklist />
        </Route>
        <Route exact path={["/saved"]}>
          <Saved />
        </Route>
        <Route>
          <NoMatch />
        </Route>



      </Switch>
    </Router>
  );
}

export default App;
