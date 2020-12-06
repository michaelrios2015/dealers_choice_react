import axios from 'axios';
import React, { Component } from 'react';
import Continents from './Components/Continents';


class App extends Component{
    constructor(){
        super();
        this.state = {
            continents: [],
            loading: true
        };
    }
    async componentDidMount(){
        console.log('component did mount');
        this.setState({
            continents: (await axios.get('/api/continents')).data,
            loading: false
        });
    }
    render(){
        const { continents, loading } = this.state;
        if (loading){
            return '.....loading';
        }
        return (
            <Continents continents = { continents} />
            );
    }
}

export default App;