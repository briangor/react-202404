import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/store'>Store</Link>
            <Link to='/properties'>Properties</Link>
        </ul>
    </div>
  )
}
