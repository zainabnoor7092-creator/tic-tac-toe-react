import React from 'react'

const Square =(proops)=> {
    return(
        <div className='box' onClick={proops.onClick}>
            <p>
                {proops.value}
            </p>
        </div>
    )
}

export default Square;