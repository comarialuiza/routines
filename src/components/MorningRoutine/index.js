import React, { useState, useContext } from 'react';
import { uuid } from 'uuidv4';

import { FiX } from 'react-icons/fi';

import { MorningContext } from './../../services/MorningContext';
import { Container, Task, Checkbox, Content, AddTask, Delete } from './styles';

export default function Routine({ title, tasks }) {
    const [ showForm, setShowForm ] = useState('show');
    const [ morningRoutine, setMorningRoutine ] = useContext(MorningContext);

    const handleDisplayForm = () => {
        if(showForm === 'show') {
            setShowForm('hide');
        } else if (showForm === 'hide') {
            setShowForm('show');
        }
    }

    const handleCompleteTask = id => {
        const index = morningRoutine.findIndex(el => el.id === id);
        let newMorningRoutine = [...morningRoutine];
        newMorningRoutine[index] = {...newMorningRoutine[index], completed: true};
        setMorningRoutine(newMorningRoutine);
    }

    const handleAddTask = e => {
        e.preventDefault();

        console.log(morningRoutine.length);

        if(morningRoutine.length <= 4) {
            const newTaskContent = e.target.elements.newTask.value;

            const newTask = {
                id: uuid(),
                content: newTaskContent,
                completed: false
            }
    
            setMorningRoutine([...morningRoutine, newTask]);
    
            e.target.elements.newTask.value = '';
        } else {
            console.log('too many routines!')
        }
    }

    const handleDeleteTask = id => {
        setMorningRoutine(morningRoutine.filter(routine => routine.id !== id));
    }

    return(
        <Container>
            <h2>Morning Routine</h2>

            <AddTask>
                <form id={ showForm } onSubmit={ handleAddTask }>
                    <input 
                        placeholder="New task..." 
                        name="newTask"
                    />
                    <button type="submit">Add task</button>
                </form>
                <button onClick={ handleDisplayForm } className="toggleShow">{ showForm === 'hide' ? 'Show' : 'Hide' }</button>
            </AddTask>

            <ul>
                { morningRoutine.map(task => (
                    <Task key={ task.id } id={ task.completed ? 'completed' : 'not-completed' }>
                        <Checkbox onClick={ () => handleCompleteTask(task.id) } />
                        <Content>{ task.content }</Content>
                        <Delete type="button" onClick={ () => handleDeleteTask(task.id) }><FiX /></Delete>
                    </Task>
                )) }
            </ul>
        </Container>
    );
}