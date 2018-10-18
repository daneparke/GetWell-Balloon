import React from 'react'
import baloon from './baloon.png'

const Balloon = (props) => {
    return (
        <>
            <img onClick={props.grow} class='grow' src={baloon}
                alt='Get Well Balloon'></img>

        </>
    )
}
export default Balloon