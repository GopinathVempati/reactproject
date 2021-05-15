import React from 'react';

const CardTwo = (props) => {
    return (
    <div className='bg-light-green dib br3 pa3 ma2 grow shadow-4'>
        <img alt='robots' src={`https://robohash.org/${props.id}?50x50`}/>
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    </div>

    );
}

export default CardTwo;