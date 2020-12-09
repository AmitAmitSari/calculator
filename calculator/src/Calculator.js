import { useState } from 'react';
import PropTypes from 'prop-types'

import { Display } from './Display';
import { Panel, operations } from './Panel'

function Caclulator({ scale }) {
    const [prevNumber, setPrevNumber] = useState(null);
    const [operation, setOperation] = useState(operations.NOOP);
    const [number, setNumber] = useState(null);
    const operating = operation.sign !== null && number !== null

    const createEquation = () => {
        let equation = '';
        if (prevNumber) { equation += prevNumber + ' '; }
        if (operation.sign) {equation += operation.sign + ' '; }
        if (number) {equation += number; }
        if (operating) {equation += ' = ';}
        if (!equation) {equation = '\xa0'; } // Non breaking space.
        return equation;
    }

    const handleAC = () => {
        setNumber(null);
        setPrevNumber(null);
        setOperation(operations.NOOP);
    }

    const handleEQ = () => {
        if (operating) {
            setNumber(operation.func(prevNumber, number));
            setPrevNumber(null);
            setOperation(operations.NOOP);
        }
    }

    const handleOP = (op) => {
        setOperation(op);
        setPrevNumber(number);
        setNumber(null);
    }

    const operationCallback = (op) => {
        switch (op) {
            case operations.AC:
                handleAC();
                break;
            case operations.EQUALS:
                handleEQ();
                break;
            case operations.DIVIDE:
            case operations.MULTIPLY:
            case operations.ADD:
            case operations.SUBTRACT:
                handleOP(op);
                break;
            default:
                console.log("Unrecognized operation, " + op);
        }
    }

    const equation = createEquation(prevNumber, operation, number);
    const result = operating ? operation.func(prevNumber, number) : '\xa0';

    return (
        <>
            <Display scale={scale} equation={ equation } result={ result } />
            <Panel
                scale={scale}
                numberCallback={num => setNumber(number * 10 + num)}
                operationCallback={op => operationCallback(op)}
                />
        </>
    );
}

Caclulator.propTypes = {
    scale: PropTypes.number.isRequired
}

export default Caclulator;
