import React, { useContext } from 'react';

import { Container } from './styles';
import Routine from './../Routine';
import { MorningContext } from './../../services/MorningContext';
import { NightContext } from './../../services/NightContext';

export default function Holder() {
    const [ morningRoutine, setMorningRoutine ] = useContext(MorningContext);
    const [ nightRoutine, setNightRoutine ] = useContext(NightContext);


    return(
        <Container>
            <Routine title={ 'Morning' }  tasks={ morningRoutine } setTasks={ setMorningRoutine } />
            <Routine title={ 'Night' } tasks={ nightRoutine } setTasks={ setNightRoutine } />
        </Container>
    );
}