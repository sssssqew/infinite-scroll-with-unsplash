import React from 'react'
import './Button.scss'

function Button({ children, size, color, width, handleClick, disabled }){
    return <button 
                className={`Button ${size} ${color} ${width}`} 
                onClick={handleClick} disabled={disabled}
            >{children}</button>
}

export default Button;

Button.defaultProps = {
    size: 'medium',
    color: 'tomato',
    disabled: false
}