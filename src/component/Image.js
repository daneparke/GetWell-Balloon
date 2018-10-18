import React from 'react'
import meerkat from './meerkat.png'
import cat from './catdance.gif'


const Image = (props) => {


    return (
        <>
            <div classname='row'>
                <img onClick={props.grow} class='kitty' src={meerkat}
                    alt='Meerkats jumping'></img>
                <img onClick={props.grow} class='meerkat' src={cat} loop='-1'
                    alt='Dancing Kitty'></img>
                <img onClick={props.grow} class='kitty' src={meerkat}
                    alt='Meerkats jumping'></img>
            </div>
        </>
    )
}
export default Image