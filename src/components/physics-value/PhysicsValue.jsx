import React from 'react'

const PhysicsValue = ({data, onRemove}) => {
  return (
    <div className='physics-value'>
      {data.map(el => {
        return (
          <div key={el.id} className='value'>
            <p>{el.element}</p>
            {/* <button onClick={() => onRemove(el.id)}>X</button> */}
          </div>
        )
      })}
    </div>
  )
}

export default PhysicsValue