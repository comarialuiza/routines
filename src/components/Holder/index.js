import React, { useState, useContext } from 'react';

import { Container } from './styles';
import Routine from '../Routine';
import { TaskContext } from './../../services/TaskContext';

export default function Holder() {
    const value = useContext(TaskContext);

    return(
        <Container>
            <Routine title={ 'Morning' } tasks={ value.morningRoutine } />
            <Routine title={ 'Night' } tasks={ value.nightRoutine } />
        </Container>
    );
}