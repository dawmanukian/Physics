import React from 'react'

const Answer = ({data}) => {
  return (
    <div className='physics-answer'>
      {data === null ? null : 
        <div className='answer'>
          <p>V = S / t</p>
          <p>V = 120 / 60 = 2</p>
        </div>
      }
    </div>
  )
}

export default Answer