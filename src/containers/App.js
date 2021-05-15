import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
//import { robots } from './javascript/robots.js';
import './App.css';
import Scroll from '../components/Scroll.js'

class App extends Component {

    constructor(){
        super()
        this.state ={
            robots : [],
            searchfield : ''
        }
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
        
        //api call
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) =>{
        this.setState({searchfield : event.target.value})
    }

    render(){
        const {robots,searchfield} = this.state;
        const filteredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log("render");
        // return is trenary condition return ?:
        return !robots.length 
        ? <h1 className='f2 tc'>Loading</h1>
        :(
            <div className="tc">
            <h1 className='f2'>robo friends</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredrobots}/>    
            </Scroll>
            </div>
        );
        
    }
}

export default App;