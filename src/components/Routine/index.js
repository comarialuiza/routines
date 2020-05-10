import React, { useState } from 'react';
import AddTask from './../AddTask';
import { Container, Task, Checkbox, Content } from './styles';

export default function Routine({ title, tasks }) {
    const handleCompleteTask = (id) => {
        return id;
    }

    return(
        <Container>
            <h2>{ title }</h2>

            <AddTask />

            <ul>
                { tasks.map(task => (
                    <Task key={ task.id }><Checkbox onClick={ () => handleCompleteTask(task.id) } /><Content>{ task.content }</Content></Task>
                )) }
            </ul>
        </Container>
    );
}