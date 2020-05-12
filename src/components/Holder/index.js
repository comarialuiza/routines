import React, { useContext } from 'react';

import { Container } from './styles';
import MorningRoutine from './../MorningRoutine';

export default function Holder() {
    return(
        <Container>
            <MorningRoutine />
            { /* <Routine title={ 'Night' } tasks={ nightRoutine } /> */ }
        </Container>
    );
}