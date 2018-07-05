import React,{Component} from 'react';

export default class Lifecycle extends Component{
    //1 get default props

    //2 set default props
    state={
        //....
    }

    //5 after render jsx
    componentDidMount(){
        console.log('5 before rende jsx');
    }
    
    //3 before render jsx
    componentWillMount(){
        console.log('3 before rende jsx');
    }

    //update jsx

    componentWillUpdate(){
        console.log('Before Update');
    }

    componentDidUpdate(){
        console.log('After Update');
    }

    //Receive Props
    componentWillReceiveProps(){ //only for listening new props
        console.log('Before Receive Props')
    }

    //Leave component
    componentWillUnmount(){ // when user click to another link, then this function will be run 
        console.log('Unmount')
    }

    //4 render jsx
    render(){
        console.log('4 render jsx')
        return(
            <div>
                <h1 className="h4">REACT Lifecycle</h1>
                - 1 get default <b>props</b>
                <br/>
                - 2 set default <b>state</b>
                <br/>
                - 5 after render jsx <b>componentDidMount()</b> [<u>always after render()</u>]
                <br/>   
                - 3 before render jsx <b>componentWillMount()</b> [<u>always before render()</u>]
                <br/>
                - 4 render jsx
                <br/>/------------------------/<br/>
                - <b>componentWillUpdate()</b> [<u>always before update JSX</u>]
                <br/>
                - <b>componentDidUpdate()</b> [<u>always after update JSX</u>]
            </div>
        )
    }


}