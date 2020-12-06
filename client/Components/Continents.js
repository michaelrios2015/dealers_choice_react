import React from 'react';

const Continents = ({ continents })=> {
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
    )
}

export default Continents;