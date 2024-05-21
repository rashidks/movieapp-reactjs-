import React, { useEffect, useState } from 'react'
import axios from 'axios'
import urls from'./config'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const Nowplaying = () => {
  const navigate = useNavigate()
  

  const [data,setData] =useState([])
  const handleCardClick=(movieID)=>{
    navigate(`/detail/?movieID=${movieID}`)

  }

  useEffect(()=>{
    axios.get(urls.nowplaying,urls.options)
    .then((response)=>{
      console.log(response.data.results)
      setData(response.data.results)
    }).catch((error)=>{
      console.log(error)
    })

  
  },[])
  return (
    <div className='grid grid-cols-4 gap-10'>
      {data.map((movie) => (
          <Card key={movie.id} posterpath={movie.poster_path } onClick={()=>handleCardClick(movie.id)}/>
        ))
      }
    </div>
  )
}

export default Nowplaying