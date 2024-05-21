import React from 'react'

const Sidebar = ({handlelinkClick}) => {
  return (
    <div className=' fixed h-screen bg-black w-60 text-slate-300'>
        <h1 className='text-2xl px-7 font-semibold'>Explore Now</h1>
        <div className='list-none px-7 flex flex-col py-4 font-semibold'>
            <li onClick={() => handlelinkClick('nowplaying')} className='py-2 cursor-pointer'>Now playing</li>
            <li onClick={() => handlelinkClick('popular')} className='py-2 cursor-pointer'>Popular</li>
            <li onClick={() => handlelinkClick('toprated')}  className='py-2 cursor-pointer'>Top Rated</li>
            <li onClick={() => handlelinkClick('upcoming')} className='py-2 cursor-pointer'>Up Coming</li>
            <li onClick={() => handlelinkClick('search')} className='py-2 cursor-pointer'>Search</li>

        </div>
    </div>
  )
}

export default Sidebar