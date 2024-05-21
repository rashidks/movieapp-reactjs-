import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Nowplaying from './Nowplaying'
import Popular from './Popular'
import Toprated from './Toprated'
import Upcoming from './Upcoming'
import Search from './Search'

const Home = () => {
    const [activeComponent,setActiveComponent]=useState("nowplaying")
    const handlelinkClick =(componentName)=>{
        setActiveComponent(componentName)
    }
  return (
    <div className='flex bg-black'>
        <Sidebar handlelinkClick={handlelinkClick}/>
        <div className='p-20 ml-48'>
            {activeComponent === 'nowplaying' && <Nowplaying/>}
            {activeComponent === 'popular' && <Popular/>}
            {activeComponent === 'toprated' && <Toprated/>}
            {activeComponent === 'upcoming' && <Upcoming/>}
            {activeComponent === 'search' && <Search/>}

        </div>

    </div>
  )
}

export default Home