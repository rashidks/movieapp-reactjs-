import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar1 = () => {
  const navigate = useNavigate()
  const handleClickHome=()=>{
    navigate('/')
  }
  return (
    <div className='flex justify-between px-20 bg-black text-yellow-200 '>
        <div className='text-3xl mt-2'>Movieapp</div>
        <div className='list-none flex gap-5 text-xl mt-4 mb-4'>
            <li onClick={handleClickHome}>Home</li>
            <li>Contact</li>
            <li>About</li>

        </div>
    </div>
  )
}

export default Navbar1