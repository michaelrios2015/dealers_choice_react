import axios from 'axios';
import React, { Component } from 'react';
import Continents from './Components/Continents';
import Continent from './Components/Continent';

class App extends Component{
    constructor(){
        super();
        this.state = {
            continents: [],
            loading: true,
            continentId: ''
        };
    }
    async componentDidMount(){
        console.log('component did mount');
        this.setState({
            continents: (await axios.get('/api/continents')).data,
            loading: false
        });
        window.addEventListener('hashchange', ()=> { 
            this.setState({ continentId: window.location.hash.slice(1) });
        })
        this.setState({ continentId: window.location.hash.slice(1) });
    }
   
    render(){
        const { continents, loading, continentId } = this.state;
        if (loading){
            return '.....loading';
        }
        return (
            <div>
            { continentId ? <Continent continentId = { continentId }/> : <Continents continents = { continents} /> } 
            </div>
            );
    }
}

export default App;