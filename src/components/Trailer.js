import React from 'react';

const Trailer = (props) => {
    console.log(props.location.Movie)
    const {name,description,posterurl}=props.location.Movie
    return (
        <div>
            <h1> {name}</h1>
            <img src={posterurl}/>
            <p> {description} </p>
        </div>
    );
}

export default Trailer;

