import { useState } from 'react';

const useInput = ({ validateValue, initialValue = ''}) => {
    const [enteredValue, setEnteredValue] = useState(initialValue);
    const [isTouched, setIsTouched] = useState(false);
  
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangedHandler = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        setEnteredValue(value);
        // setEnteredValue(event.target.value);
    };
  
    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;
