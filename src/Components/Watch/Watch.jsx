import React from 'react';

const Watch = ({watch}) => {
    const {name,price} = watch;
    return (
        <div>
            <h1>Watches: {name} </h1>
            <h2>Price: {price}</h2>
        </div>
    );
};

export default Watch;