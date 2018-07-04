import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';

//Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post_item';



const App=()=>{
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <nav className="nav">
                    <Link to="/" className="py-2 pr-2 pl-0 text-muted">Home</Link>
                    <Link to="/posts" className="p-2 text-muted">Posts</Link>
                    <Link to={{
                            pathname: '/profile',
                            hash:'#alkal',
                            search:'?profile=true'
                    }} className="p-2 text-muted">Profile</Link>
                </nav>
                <main>
                    <hr className="py-0 mt-0"/>
                    <Route path="/" exact component={Home} />
                    <Route path="/posts" exact component={Posts} />
                    <Route path="/posts/:id/:username" component={PostItem} />
                    <Route path="/profile" component={Profile} />
                </main>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));