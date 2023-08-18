import React, { useState } from 'react'

const PhysicsForm = () => {

  const [value, setValue] = useState('');
  const [imported, setImported] = useState('');
  const [unknown, setUnknown] = useState('');

  return (
    <div className='physics-form'>
        <form onSubmit={(evn) => evn.preventDefault()}>
            <input 
              placeholder='Import data'
              value={imported}
              onChange={(evn) => {
                setImported(evn.target.value);
              }}
            />
            <input 
              placeholder='Value' 
              type='number'
              value={value}
              onChange={(evn) => {
                setValue(evn.target.value)
              }}
            />
            <button onClick={() => {
              console.log('====================================');
              console.log(value);
              console.log('====================================');
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
            <button>
                Add
            </button>
        </form>
    </div>
  )
}

export default PhysicsForm