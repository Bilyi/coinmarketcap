import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Posts from  '../coins/coins-list';
import Search from '../search/search';

const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Posts location={location}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Main;
