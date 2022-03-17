import React from 'react'
import { Link } from 'react-router-dom';
import "./Button.css"


const STYLES = ['btn--primary', 'btn--outline',];

const SIZES = ['btn--medium', 'btn--large'];

function Button({ children,
  to,
    type,
    onClick,
    buttonStyle,
    buttonSize}) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to={to} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        style={type}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button