import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./components/homePage";
import PlacesPage from "./components/placesPage";
import GalleryPage from "./components/galleryPage";
import ContactPage from "./components/contactPage";
import Footer from "./components/footerPage";

const App = () => {
    return (
        <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
            <HomePage />
            <PlacesPage />
            <GalleryPage />
            <ContactPage />
            <Footer />
        </div>
    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
























// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import HomePage from './views/HomePage';
// import AboutPage from './views/AboutPage';
// import ActivePage from './views/ActivePage';
// import WorksPage from './views/WorksPage';

// import TableForBacil from './components/Content/AboutComponents/TableForBacil'
// import TableForCream from './components/Content/AboutComponents/TableForCream'
// import TableForTomato from './components/Content/AboutComponents/TableForTomato'


// import { HashRouter, Link } from "react-router-dom"
// // BrowserRouter改成HashRouter 換業時就不會 cannot /get  about...
// const App = (props) => {
//     return (
//         <HashRouter>
//             <Switch>
//                 <Route exact path="/" component={HomePage} />
//                 <Route path="/About" component={AboutPage} />
//                 <Route path="/Works" component={WorksPage} />
//                 <Route path="/Active" component={ActivePage} />


//                 <Route path="/TableForBacil" component={TableForBacil} />
//                 <Route path="/TableForCream" component={TableForCream} />
//                 <Route path="/TableForTomato" component={TableForTomato} />
//                 <Route render={() => <p>Not found</p>} />
//             </Switch>
//         </HashRouter>
//     )
// };

// ReactDOM.render(
//     <App />,
//     document.getElementById('root'));