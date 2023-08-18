import React, { useState } from 'react'

const PhysicsForm = ({onAdd, onAddUnknown}) => {

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
              setImported('')
              setValue('')
              onAdd(imported, value)
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
              setUnknown('')
              onAddUnknown(unknown)
            }}>
                Add
            </button>
            <br></br>
            <button>
              Get result
            </button>
        </form>
    </div>
  )
}

export default PhysicsForm