// src/components/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleOperandChange = (event, operand) => {
    const value = event.target.value;
    operand === 1 ? setOperand1(value) : setOperand2(value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const handleShowResult = () => {
    if (operand1 && operand2) {
      let calculatedResult;
      const num1 = parseFloat(operand1);
      const num2 = parseFloat(operand2);

      switch (operation) {
        case '+':
          calculatedResult = num1 + num2;
          break;
        case '-':
          calculatedResult = num1 - num2;
          break;
        case '*':
          calculatedResult = num1 * num2;
          break;
        case '/':
          calculatedResult = num1 / num2;
          break;
        default:
          calculatedResult = '';
      }

      setResult(calculatedResult.toString());
    } else {
      setResult('Please enter both operands.');
    }
  };

  return (
    <div className="calculator">
      <div>
        <label htmlFor="operand1">Operand 1:</label>
        <input
          type="number"
          id="operand1"
          value={operand1}
          onChange={(e) => handleOperandChange(e, 1)}
        />
      </div>
      <div>
        <label htmlFor="operand2">Operand 2:</label>
        <input
          type="number"
          id="operand2"
          value={operand2}
          onChange={(e) => handleOperandChange(e, 2)}
        />
      </div>
      <div>
        <label htmlFor="operation">Select operation:</label>
        <select
          id="operation"
          value={operation}
          onChange={handleOperationChange}
        >
          <option value="+">Add</option>
          <option value="-">Subtract</option>
          <option value="*">Multiply</option>
          <option value="/">Divide</option>
        </select>
      </div>
      <div>
        <button onClick={handleShowResult}>Show Result</button>
      </div>
      <div>
        <label>Result:</label>
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default Calculator;
