import React from 'react';
import { add, multiply } from '../utilites/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h3>My shoes compo</h3>
            <p>Result: {result} and total: {sum}</p>
        </div>
    );
};

export default Shoes;