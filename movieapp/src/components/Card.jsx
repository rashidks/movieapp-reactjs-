import React from 'react'
import urls from './config'

const Card = ({posterpath,onClick}) => {
  return (
    <div onClick={onClick} className='w-48 h-80 bg-cover bg-center bg-no-repeat rounded-xl relative' style={{backgroundImage:`url(${urls.image}${posterpath})`}}>movie <br></br>card
    <div className='absolute bg-black inset-0 bg-opacity-50 rounded-xl'>

    </div>
    </div>
  )
}

export default Card