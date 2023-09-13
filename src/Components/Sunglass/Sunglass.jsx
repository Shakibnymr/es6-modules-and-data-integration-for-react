import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add } from '../../Utils/Calculate';
// import add from '../../Utils/Calculate';



const Sunglass = () => {


    const first = 33;
const second = 32;
const total = add(first,second)
    return (
        <div>



            <Watch></Watch>
        </div>
    );
};

export default Sunglass;