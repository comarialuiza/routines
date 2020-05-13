import React, { useState, createContext } from 'react';

export const NightContext = createContext();

export const NightProvider = props => {
    const [ nightRoutine, setNightRoutine ] = useState([
        {
            id: 1,
            content: 'Eat dinner',
            completed: false
        },
        {
            id: 2,
            content: 'Wash face',
            completed: false
        },
        {
            id: 3,
            content: 'Brush teeth',
            completed: false
        },
        {
            id: 4,
            content: 'Sleep',
            completed: false
        }
    ]);


    return(
        <NightContext.Provider value={[ nightRoutine, setNightRoutine ]} >
            { props.children }
        </NightContext.Provider>
    );
}