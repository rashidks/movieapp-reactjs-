import React, { useEffect, useState } from 'react'
import axios from 'axios'
import urls from'./config'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Detail = () => {
    const params=new URLSearchParams(window.location.search)
    const movieId=params.get('movieID')
    console.log(movieId);
  const [data,setData] =useState({})
  const [similarMovie,setSimilarMovie]=useState([])
  const navigate = useNavigate()


    useEffect(()=>{
        axios.get(`${urls.detailMovie}${movieId}`,urls.options)
        .then((response)=>{
            console.log(response.data)
            setData(response.data)

        }).catch((error)=>{
            console.log(error)

        })

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar`,urls.options)
        .then((response)=>{
        console.log(response.data.results,'this is similar')
        setSimilarMovie(response.data.results)
        })
    },[movieId])

    // useEffect(()=>{},[])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
         
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          
        }
      };
const handleTrialClick=(movieid)=>{
    navigate(`/trial?movieId=${movieid}`)

}
    
  return (
    <div className='bg-black'>
    <div className='h-[753px] bg-cover  bg-center bg-no-repeat'style={{backgroundImage:`url(${urls.image}${data.backdrop_path})`}}>  
    <div className='w-1/2 p-6'>
        <h1 className='text-gray-50 text-4xl mb-16 font-bold'>{data.title}</h1>
        <p className='text-gray-50 mb-6'>{data.overview}</p>
        <button className='w-40 bg-yellow-500 hover:bg-yellow-300 text-white rounded-xl ml-32 ' onClick={() =>handleTrialClick(data.id)}>whatch trailer</button>
    </div>
    </div>
    <div className=' mt-8 p-5'>
    <h1 className=' text-yellow-200 font-semibold text-3xl'>similar</h1>
     <Carousel autoPlay
     autoPlaySpeed={1000}
     slidesToSlide={1}
     infinite
     responsive={responsive}>
        {similarMovie.map((movie)=>(
    <div key={movie.id}>
         
    <img src={`${urls.image}${movie.poster_path}`}  className='w-full'/>
    </div>
))}

     </Carousel>
    </div>
    </div>
  )
}



export default Detail