import React, { useEffect, useState } from 'react';
import '../styles/Calculator.css';

import TheTitle from './TheTitle';
import BeautifulScreen from './BeautifulScreen';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperatorButton from './GreatOperatorButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import ClearButton from './ClearButton';
import ItsOverNineThousand from './ItsOverNineThousand';
import SaveButton from './SaveButton';
import axios from 'axios';

function Calculator() {

    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');
    const [table, setTable] = useState([]);


    const save = async () => {
        console.log(operation);
        console.log(result);

        const url = 'http://localhost/calculator9000/php/APICalculator.php';
        try {
            const DataCalcul = await axios.post(url, {
                operation: operation,
                result: result
            });
        }
        catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        axios.get('http://localhost/calculator9000/php/getData.php')
        .then(res => res.data)
        .then((data) => {
            setTable(data);
        })
    })


    // appellée à chaque appui d'un bouton (sauf égal, clear et save)
    function handleClick(e) {
        console.log(e.target.innerText);
        setOperation(operation.concat(e.target.innerText));
    }

    // appellée uniquement quand on clique sur le bouton =
    function calculate() {
        try {
            setResult(eval(operation));
            console.log(`%c${result}`, 'color: green; font-size: 1.5rem;');
        }
        catch(err) {
            console.log(err);
        }
    }

    function clear() {
        setOperation('');
        setResult('');
    }

    function checkOver9k() {
        try {
            if (eval(operation) > 9000) {
                return <ItsOverNineThousand isHidden="over-9k"/>
            }
            else {
                return <ItsOverNineThousand isHidden="under-9k"/>
            }
        }
        catch(err) {
            console.log("SyntaxError :(");
        }
    }

    function checkResult() {
        try {
            if (result === '') {
                return operation;
            }
            else {
                return result;
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    

    return (
        <section className="c9k">
            {checkOver9k() /* affiche le message "IT'S OVER 9000!" si le résultat est supérieur à 9000 */}
            <TheTitle/>
            <BeautifulScreen operation={checkResult()} onChange={(e)=>setOperation(operation.concat(e.target.innerText))}/>


            <div className="c9k-btn-panel">
                {/* First row */}
                <div className="c9k-btn-row">
                    <AmazingNumberButton value="1" onClick={(e) => handleClick(e)}/>
                    <AmazingNumberButton value="2" onClick={(e) => handleClick(e)}/>
                    <AmazingNumberButton value="3" onClick={(e) => handleClick(e)}/>
                    <GreatOperatorButton value="+" click={(e) => handleClick(e)}/>
                </div>
                {/* Second row */}
                <div className="c9k-btn-row">
                    <AmazingNumberButton value="4" onClick={(e) => handleClick(e)}/>
                    <AmazingNumberButton value="5" onClick={(e) => handleClick(e)}/>
                    <AmazingNumberButton value="6" onClick={(e) => handleClick(e)}/>
                    <GreatOperatorButton value="-" click={(e) => handleClick(e)}/>
                </div>
                {/* Third row */}
                <div className="c9k-btn-row">
                    <AmazingNumberButton value="7" onClick={(e) => handleClick(e)}/>
                    <AmazingNumberButton value="8" onClick={(e) => handleClick(e)}/>
                    <AmazingNumberButton value="9" onClick={(e) => handleClick(e)}/>
                    <GreatOperatorButton value="*" click={(e) => handleClick(e)}/>
                </div>
                {/* Fourth row */}
                <div className="c9k-btn-row">
                    <AmazingNumberButton value="0" onClick={(e) => handleClick(e)}/>
                    <AmazingNumberButton value="." onClick={(e) => handleClick(e)}/>
                    <GreatOperatorButton value="/" click={(e) => handleClick(e)}/>
                </div>
                {/* Fifth row */}
                <div className="c9k-btn-row">
                    <SaveButton saveFunction={() => save()}/>
                    <MagnificientEqualButton onClick={() => calculate()}/>
                    <ClearButton clearFunction={() => clear()}/>
                </div>
            </div>
            
            <table className='history'>
                <thead>
                    <tr>
                        <th>Operation</th>
                        <th>Resultat</th>
                    </tr>
                </thead>
                <tbody>
                {table.map((item, key) => (
                    <tr key={key}>
                        <td>{item.calcul}</td>
                        <td>{item.resultat}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}

export default Calculator;