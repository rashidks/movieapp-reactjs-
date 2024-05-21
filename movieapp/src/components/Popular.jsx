import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import urls from'./config'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
const Popular = () => {
  const [data,setData] =useState([])
  const navigate = useNavigate()
  const handleCardClick=(movieID)=>{
    navigate(`/detail/?movieID=${movieID}`)

  }

  useEffect(()=>{
    axios.get(urls.popular,urls.options)
    .then((response)=>{
      console.log(response.data.results)
      setData(response.data.results)
    })
  
  },[])
  return (
    <div className='grid grid-cols-4 gap-10'>
      {data.map((movie) => (
          <Card posterpath={movie.poster_path } onClick={()=>handleCardClick(movie.id)}/>
        ))
      }
    </div>
   
  )
}

export default Popular