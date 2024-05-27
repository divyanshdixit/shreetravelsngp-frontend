import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div> Page not found </div>
    <button type='button'> <NavLink to='/'> Go to Home </NavLink></button>
    </>
  )
}

export default ErrorPage