import React, { useState } from 'react';
import { uuid } from 'uuidv4';

import { FiX } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';

import { Container, Task, Checkbox, Content, AddTask, Delete } from './styles';

export default function Routine({ title, tasks, setTasks }) {
    const [ showForm, setShowForm ] = useState('show');

    const handleDisplayForm = () => {
        if(showForm === 'show') {
            setShowForm('hide');
        } else if (showForm === 'hide') {
            setShowForm('show');
        }
    }

    const handleCompleteTask = id => {
        const index = tasks.findIndex(el => el.id === id);
        let newTask = [...tasks];
        newTask[index] = {...newTask[index], completed: true};
        setTasks(newTask);
    }

    const handleAddTask = e => {
        e.preventDefault();

        console.log(tasks.length);

        if(tasks.length <= 4) {
            const newTaskContent = e.target.elements.newTask.value;

            const newTask = {
                id: uuid(),
                content: newTaskContent,
                completed: false
            }
    
            setTasks([...tasks, newTask]);
    
            e.target.elements.newTask.value = '';
        } else {
            console.log('too many routines!')
        }
    }

    const handleDeleteTask = id => {
        setTasks(tasks.filter(routine => routine.id !== id));
    }

    return(
        <Container>
            <h2>{ title } Routine</h2>

            <AddTask>
                <form id={ showForm } onSubmit={ handleAddTask }>
                    <input 
                        placeholder="New task..." 
                        name="newTask"
                        className={ `input${title}` }
                    />
                    <button type="submit" className={`button${title}`}>Add task</button>
                </form>
                <button onClick={ handleDisplayForm } className='toggleShow'>{ showForm === 'hide' ? 'Show' : 'Hide' }</button>
            </AddTask>

            <ul className={ `routine${title}` } >
                { tasks.map(task => (
                    <Task key={ task.id } id={ task.completed ? 'completed' : 'not-completed' }>
                        <Checkbox onClick={ () => handleCompleteTask(task.id) }><FaCheck /></Checkbox>
                        <Content>{ task.content }</Content>
                        <Delete type="button" onClick={ () => handleDeleteTask(task.id) } className='buttonDelete'><FiX /></Delete>
                    </Task>
                )) }
            </ul>
        </Container>
    );
}