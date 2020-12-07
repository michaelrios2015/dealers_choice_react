import axios from 'axios';
import React, { Component } from 'react';

class Continent extends Component{
    constructor(){
        super();
        this.state = {
            continent: {}
        };
    }

    async componentDidMount(){
        console.log('Continent component did mount');
        this.setState({ continent: (await axios.get(`/api/continents/${this.props.continentId}`)).data});
    }
    render(){
        const { continent } = this.state;
        if(!continent.id){
            return '.....loading'
        }
        console.log(continent);
        return(
            <div>
              <h1>{ continent.name }</h1>
              <h2> Countries </h2>
              <ul>
                  {
                      //continent.countries[0]
                     //continent.countries[0].name
                     //a stateless country component should be made 
                      continent.countries.map( country => {
                          return (
                              <li key={ country.id }>
                                  { country.name }
                                  <ul>
                                    <li>
                                    { country.dates }
                                    </li>
                                    <li>                                  
                                    { country.description }
                                    </li>
                                  </ul>
                              </li>
                          );
                      })
                  }
              </ul>
              <a href='#'>All the continents :)</a>
            </div>
        );
    }
}

export default Continent;