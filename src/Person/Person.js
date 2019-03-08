import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a person? I've been here for {props.age} years. My name... is ..{props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;