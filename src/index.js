import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,NavLink,Switch} from 'react-router-dom';

//Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Lifecycle from './components/lifecycle';



const App=()=>{
    return (
        //You can use also:
        //  - <HashRouter> for http://domain.com/#/something
        //  - <MemoryRouter> for only http://domain.com and all others root will be kept at memory

        //Navlink take as a parameter a preferable activeStyle or activeClassName
        <BrowserRouter>
            <div className="container-fluid">
                <nav className="nav">
                    <Link to="/" className="py-2 pr-2 pl-0 text-muted">Home</Link>
                    <NavLink to="/posts" className="p-2 text-muted" activeClassName="selected">Posts</NavLink>
                    <Link to={{
                            pathname: '/profile',
                            hash:'#alkal',
                            search:'?profile=true'
                    }} className="p-2 text-muted">Profile</Link>
                    <NavLink to="/lifecycle" className="p-2 text-muted">Lifecycle</NavLink>
                </nav>
                <main>
                    <hr className="py-0 mt-0"/>
                    <Switch>
                        <Route path="/posts/:id/:username" component={PostItem} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/lifecycle" component={Lifecycle} />
                        <Route path="/" exact component={Home} />
                        <Route component={Profile} /> {/* fallback when page not found */}
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));