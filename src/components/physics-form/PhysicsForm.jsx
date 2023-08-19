import React, { useState } from 'react'
import { FiTrash2, FiUploadCloud, FiPlusCircle } from "react-icons/fi";

const PhysicsForm = ({onAdd, onAddUnknown, onClear}) => {

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
                <div className='btn'>import <FiUploadCloud /></div>
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
                <div className='btn'>Add <FiPlusCircle /></div>
            </button>
            {/* <br></br>
            <button onClick={() => onCalculating()}>
              Get result
            </button> */}
            <br />
            <button onClick={onClear}><div className='btn'>Clear <FiTrash2 /></div></button>
        </form>
    </div>
  )
}

export default PhysicsForm