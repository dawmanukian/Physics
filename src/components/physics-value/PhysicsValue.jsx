import React from 'react'

const PhysicsValue = ({data}) => {
  return (
    <div className='physics-value'>
      {data.map(el => {
        return (
          <p key={el.id}>{el.element} {el.value != undefined ? '=' : '= ?'} {el.value != undefined && el.value}</p>
        )
      })}
    </div>
  )
}

export default PhysicsValue