import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//COMPONENTS
import Profile from './components/profile.js';
import Posts from './components/posts.js';
import PostsItem from './components/posts_item.js';
import NotFound from './components/not_found.js';

class App extends React.Component {
    render(){
        return(
            <div> Home </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <Link to = "/"> Home </Link>
                <Link to = "/profile"> Profile </Link>
                <Link to = "/posts"> Posts </Link>
            </header>
            <hr/>
            {/* <Route exact path = "/" component={App}></Route>
            <Route exact path = "/posts" component={Posts}></Route>
            <Route path = "/profile" component={Profile}></Route>
            <Route path = "/posts/:id" component={PostsItem}></Route> */}
            <Switch>
                <Route path = "/posts/:id" component={PostsItem}></Route>
                <Route path = "/posts" component={Posts}></Route>
                <Route path = "/profile" component={Profile}></Route>
                <Route exact path = "/" component={App}></Route>
                <Route path = "*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
    , document.querySelector("#root"));