import React, { useState, createContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = props => {
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
            content: 'Stop using phone',
            completed: false
        },
        {
            id: 5,
            content: 'Sleep',
            completed: false
        }
    ])

    return(
        <TaskContext.Provider value={{ morningRoutine, nightRoutine }} >
            { props.children }
        </TaskContext.Provider>
    );
}