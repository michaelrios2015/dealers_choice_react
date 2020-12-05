import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class App extends Component{
    constructor(){
        super();
        this.state = {
            continents: [],
            loading: true
        };
    }
    async componentDidMount(){
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
            <div>
                <h2>Continents ({continents.length})</h2>
            <ul>
                {
                    continents.map ( continent => {
                        return (
                            <li key = { continent.id }>
                                { continent.name }
                            </li>
                        );
                    })
                }
            </ul>
            </div>
        );
    }
}

render (<App />, document.querySelector('#root'));