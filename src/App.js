import "./App.css";
import { GlobalContextProvider } from "./Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header";
import AllProjects from "./components/AllProjects";
import SingleProject from "./components/SingleProject";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Router>
          <Header />

          <Switch>
            <Route path="/project/:id" component={SingleProject} />
            <Route exact path="/" component={AllProjects} />
          </Switch>
        </Router>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
