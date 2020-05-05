import React, { useState } from 'react';

import AddTask from './../AddTask';
import { Container, Task, Checkbox, Content } from './styles';

export default function Routine({ title, tasks }) {
    const [ taskStatus, setTaskStatus ] = useState('uncompleted');

    const handleCompleteTask = () => {
        setTaskStatus('completed');
    }

    return(
        <Container>
            <h2>{ title }</h2>

            <AddTask />

            <ul>
                { tasks.map(task => (
                    <Task key={ task.id } id={ taskStatus } ><Checkbox onClick={ handleCompleteTask } /><Content>{ task.content }</Content></Task>
                )) }
            </ul>
        </Container>
    );
}