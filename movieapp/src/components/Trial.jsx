import axios from 'axios'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import urls from './config'

const Trial = () => {
    const urlparams = new URLSearchParams(window.location.search)
    const movieID =urlparams.get('movieId') 
    const [tailer,setTrailer]=useState([])
    console.log(movieID)
    useEffect(()=>{
        axios.get(` https://api.themoviedb.org/3/movie/${movieID}/videos`,urls.options)
        .then((response)=>{
            console.log('hiii')
            console.log(response.data.results);
            setTrailer(response.data.results)
        }).catch((error)=>{
            console.log(error)
        })
    },[movieID])
    const opts = {
        height: '1300',
        width: '1640',
        playerVars: {
          autoplay: 1,
        },
      };
  return (
    <div className='w-auto h-screen bg-black overflow-hidden'>
        {tailer.slice(0,1).map((video) => (
            <div key={video.id}>
                <YouTube opts={opts} videoId={video.key}/>
            </div>
        ))}
    </div>
  )
}

export default Trial