import React, { useState } from 'react'

const PhysicsForm = ({onAdd, onAddUnknown, onCalculating}) => {

  // const [value, setValue] = useState('');
  const [imported, setImported] = useState('');
  const [unknown, setUnknown] = useState('');
  const [error, setError] = useState(null)

  return (
    <div className='physics-form'>
        {error === null ? null : <p className='error'>{error}</p>}
        <form onSubmit={(evn) => evn.preventDefault()}>
            <input 
              placeholder='Import data'
              value={imported}
              onChange={(evn) => {
                setImported(evn.target.value);
              }}
            />
            {/* <input 
              placeholder='Value' 
              type='number'
              value={value}
              onChange={(evn) => {
                setValue(evn.target.value)
              }}
            /> */}
            <button onClick={() => {
              if (imported === '') {  
                setError('Fill in all fields !')              
              }else {
                setError(null)  
                setImported('')
                // setValue('')
                onAdd(imported)
              }
            }}>
                import
            </button>
            <input 
              placeholder='Add unknown'
              value={unknown}
              onChange={(evn) => {
                setUnknown(evn.target.value)
              }}
            />
            <button onClick={() => {
              if (unknown === '') {  
                setError('Fill in all fields !')              
              }else {
                setError(null)
                setUnknown('')
                onAddUnknown(unknown)
              }
            }}>
                Add
            </button>
            {/* <br></br>
            <button onClick={() => onCalculating()}>
              Get result
            </button> */}
        </form>
    </div>
  )
}

export default PhysicsForm