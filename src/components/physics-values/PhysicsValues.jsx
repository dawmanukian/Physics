import React from 'react'
import PhysicsValue from '../physics-value/PhysicsValue'

const PhysicsValues = ({imported, unknown}) => {
  return (
    <div className='physics-values'>
        <div>
            <h3>Imported values</h3>
            <PhysicsValue data={imported}/> 
        </div>
        <div>
            <h3>Unknown values</h3>
            <PhysicsValue data={unknown}/>
        </div>
    </div>
  )
}

export default PhysicsValues