import React, { useState } from 'react';

import { Container } from './styles';

export default function AddTask() {
    const [ showForm, setShowForm ] = useState('show');

    const handleDisplayForm = () => {
        if(showForm === 'show') {
            setShowForm('hide');
        } else if (showForm === 'hide') {
            setShowForm('show');
        }
    }

    return (
        <Container>
            <form id={ showForm }>
                <input placeholder="New task..." />
                <button type="submit">Add task</button>
            </form>
            <button onClick={ handleDisplayForm } className="toggleShow">{ showForm === 'hide' ? 'Show' : 'Hide' }</button>
        </Container>
    );
}