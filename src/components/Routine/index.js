import React from 'react';

import { Container, Task, Checkbox, Content } from './styles';

export default function Routine({ title, tasks }) {
    return(
        <Container>
            <h2>{ title }</h2>

            <ul>
                { tasks.map(task => (
                    <Task key={ task.id }><Checkbox /><Content>{ task.content }</Content></Task>
                )) }
            </ul>
        </Container>
    );
}