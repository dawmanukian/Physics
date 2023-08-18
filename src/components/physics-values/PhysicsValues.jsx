import React from 'react'
import PhysicsValue from '../physics-value/PhysicsValue'

const PhysicsValues = ({imported, unknown, onRemove}) => {
  return (
    <div className='physics-values'>
        <div>
            <h3>Imported values</h3>
            <PhysicsValue data={imported} onRemove={onRemove}/> 
        </div>
        <div>
            <h3>Unknown values</h3>
            <PhysicsValue data={unknown} onRemove={onRemove}/>
        </div>
    </div>
  )
}

export default PhysicsValues