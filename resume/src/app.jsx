import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import MainDishPage from './views/MainDishPage';
import WorksPage from './views/WorksPage';

import TableForBacil from './components/Content/AboutComponents/TableForBacil';
import TableForCream from './components/Content/AboutComponents/TableForCream';
import TableForTomato from './components/Content/AboutComponents/TableForTomato';

import { HashRouter, Link } from 'react-router-dom';
// BrowserRouter改成HashRouter 換業時就不會 cannot /get  about...
const App = props => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/mainDish" component={MainDishPage} />
                <Route path="/works" component={WorksPage} />
                <Route path="/tableForBacil" component={TableForBacil} />
                <Route path="/tableForCream" component={TableForCream} />
                <Route path="/tableForTomato" component={TableForTomato} />
                <Route render={() => <p>Not found</p>} />
            </Switch>
        </HashRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
