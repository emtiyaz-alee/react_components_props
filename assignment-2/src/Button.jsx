import React from 'react'

const Button = (props) => {
  return (
    <>
      <button type='submit' className='btn_login'>{props.label}</button>
    </>
  )
}

export default Button
