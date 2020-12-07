import React from 'react';

const Continents = ({ continents })=> {
    return (
    <div>
        <h1>Places my Mom has been :)</h1>
        <h2>Continents ({continents.length})</h2>
        <ul>
            {
                continents.map ( continent => {
                    return (
                        
                        <li key = { continent.id }>
                            <a href = {`#${ continent.id }`}>
                                { continent.name }
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    </div>
    )
}

export default Continents;