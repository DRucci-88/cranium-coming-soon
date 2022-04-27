import ComingSoon from "./ComingSoon";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Redirect exact from={'/'} to={'/soon'}/>
                <Route exact path={'/soon'} component={ComingSoon}/>
            </Switch>
        </Router>

    );
}

export default App;
