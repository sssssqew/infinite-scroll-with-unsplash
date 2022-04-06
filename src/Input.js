import React from 'react'
import './Input.css'

function Input({ label, size, color, width, handleChange, disabled, placeholder
 }){
    return (
      <div className='Input-container'>
        <label className={`Input-label ${color}`}>{label}</label>
        <input 
                className={`Input-box ${size} ${color} ${width}`} 
                onChange={handleChange} disabled={disabled} placeholder={placeholder}
            />
      </div>
    )
}

export default Input;

Input.defaultProps = {
    size: 'medium',
    color: 'tomato',
    disabled: false
}