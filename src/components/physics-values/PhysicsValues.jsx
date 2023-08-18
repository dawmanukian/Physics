import React from 'react'
import PhysicsValue from '../physics-value/PhysicsValue'

const PhysicsValues = () => {
  return (
    <div className='physics-values'>
        <div>
            <h3>Imported values</h3>
            <PhysicsValue data={'Imported values...'}/> 
        </div>
        <div>
            <h3>Unknown values</h3>
            <PhysicsValue data={'Unknown values...'}/>
        </div>
    </div>
  )
}

export default PhysicsValues