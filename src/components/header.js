import React from 'react';

const Header = (props) => {
    return(
        <header className={props.headerClass}>
            <div className="navbar navbar-dark bg-dark box-shadow">
                <div className="container d-flex justify-content-between">
                    <a href="" className="navbar-brand d-flex align-items-center">
                    <strong>REACT Basics</strong>
                    </a>
                </div>
            </div>
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h1 className="display-5">Search List Items</h1>
                            <input type="text" className="form-control" onChange={props.keywords}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;