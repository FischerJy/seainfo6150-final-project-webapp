import React from "react";
import { Switch, Route, Link, NavLink, Redirect, BrowserRouter as Router, } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import About from "./About/About.jsx";
import Citys from "./Citys/Citys.jsx";
import City from "./City/City.jsx";
import Search from "./Search/Search.jsx";
import SearchRes from "./SearchRes/SearchRes.jsx";
import Beijing from "./Beijing/Beijing.jsx";
import Days from "./Days/Days.jsx";
import DaysRes from "./DaysRes/DaysRes.jsx";
import Thank from "./Thank/Thank.jsx";
import DayDetail from "./DayDetail/DayDetail.jsx";
import HoursDetail from "./HoursDetail/HoursDetail.jsx";
import MinutesDetail from "./MinutesDetail/MinutesDetail.jsx";
import HistorySearch from "./HistorySearch/HistorySearch.jsx";
import HisDetail from "./HisDetail/HisDetail.jsx";

import './App.css'
import Form from "./Form/Form.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
    id: "article-1",
    title: "An Article",
    author: "April Bingham",
    text: "Some text in the article",
};

function App () {
    return (
        <Router>
            <header>
                <nav className="nav">
                    <ul>
                        {/* these links should show you how to connect up a link to a specific route */}
                        <li>
                            <NavLink activeClassName="act" exact to="/">Home</NavLink>
                        </li>
                        {/* <li>
                            <NavLink activeClassName="act" exact to="/foo">Foo</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/bar/2/666">Bar</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/baz">Baz</NavLink>
                        </li> */}
                        <li>
                            <NavLink activeClassName="act" exact to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/form">form</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/Beijing">Beijing Weather</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/citys">Citys List</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/search">Search City Weather</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/days">City Weather of 7 Days </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/his">City Weather of 3 Days Historical Data </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="act" exact to="/thank">Thank You  </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div style={{
                width: '100%',
                height: '100%',
            }}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/foo" exact component={Foo} />
                    <Route
                        path="/bar/:categoryId/:productId"
                        exact
                        render={({ match }) => (
                            // getting the parameters from the url and passing
                            // down to the component as props
                            <Bar
                                categoryId={match.params.categoryId}
                                productId={match.params.productId}
                            />
                        )}
                    />
                    <Route
                        path="/baz"
                        exact
                        render={() => <Baz content={externalContent} />}
                    />
                    <Route path="/about" exact component={About} />
                    <Route path="/citys" exact component={Citys} />
                    <Route path="/search" exact component={Search} />
                    <Route path="/search/:name" exact component={SearchRes} />
                    <Route path="/days" exact component={Days} />
                    <Route path="/days/:name/:lat/:lon" exact component={DaysRes} />
                    <Route path="/day/:name/:lat/:lon/:dt" exact component={DayDetail} />
                    <Route path="/hours/:name/:lat/:lon/:dt" exact component={HoursDetail} />
                    <Route path="/mins/:name/:lat/:lon/:dt" exact component={MinutesDetail} />
                    <Route path="/hisdetail/:name/:lat/:lon" exact component={HisDetail} />
                    <Route path="/his" exact component={HistorySearch} />
                    <Route path="/city/:name" exact component={City} />
                    <Route path="/Beijing" exact component={Beijing} />
                    <Route path="/form" exact component={Form} />
                    <Route path="/thank" exact component={Thank} />
                    <Route path="/404" component={Error} />
                    <Redirect to="/404" />
                </Switch>
            </div>

        </Router>
    );
}

export default App;
