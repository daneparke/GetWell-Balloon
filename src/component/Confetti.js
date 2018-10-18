import React from 'react'
import Image from './Image'
import annoying from './neverend.mp3'

const Confetti = (props) => {


    return (
        <div className='confeti hidden'>
            <Image />
            <audio id="song" src={annoying}></audio>


        </div>
    )
}
export default Confetti