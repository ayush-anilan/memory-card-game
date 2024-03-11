import React from 'react'

const NavSection = ({ score, hiScore }) => {
    return (
        <div className='flex gap-5 flex-col text-white '>
            <div className="heading">
                <h1 className='text-8xl '>Memory Card Game</h1>
            </div>
            <div className='score flex gap-20 justify-center'>
                <div className='current-score'>
                    <p className='text-4xl'>Current Score:{score}  </p>
                </div>
                <div className='best-score'>
                    <p className='text-4xl'>Best Score: {hiScore} </p>
                </div>
            </div>
        </div>
    )
}

export default NavSection

