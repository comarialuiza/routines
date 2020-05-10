import React, { useState, createContext } from 'react';

export const MorningContext = createContext();

export const MorningProvider = props => {
    const [ morningRoutine, setMorningRoutine ] = useState([
        {
            id: 1,
            content: 'Drink water',
            completed: false
        },
        {
            id: 2,
            content: 'Wash face',
            completed: false
        },
        {
            id: 3,
            content: 'Do yoga',
            completed: false
        },
        {
            id: 4,
            content: 'Eat breakfast',
            completed: false
        }
    ]);


    return(
        <MorningContext.Provider value={[ morningRoutine, setMorningRoutine ]} >
            { props.children }
        </MorningContext.Provider>
    );
}