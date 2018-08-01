import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:'',
        lastname:''
    }

    handleNameChange = (event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleLastnameChange = (event)=>{
        this.setState({
            lastname:event.target.value
        })
    }

    onshandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="container">
                <h1> React Form - Controlled </h1>
                <form onSubmit={this.onshandler}>
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Lastname</label>
                        <input
                            type="text"
                            onChange={this.handleLastnameChange}
                            value={this.state.lastname}
                        />
                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

export default Controlled;