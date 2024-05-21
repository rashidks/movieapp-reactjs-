import React, { useEffect, useState } from 'react'
import axios from 'axios'
import urls from './config'
import Card from './Card'

const Search = () => {
    const [query,setQuery]=useState()
    const [searchResults, setSearchResults] = useState([])
    const  handleCardclick=(movieid)=>{
        console.log(movieid)
    }

    useEffect(() =>{
        const handleSearch = () =>{
                const encodedQuery = encodeURIComponent(query);
                axios.get(`https://api.themoviedb.org/3/search/movie?query=${encodedQuery}`, urls.options)
                .then((response) =>{
                    console.log(response.data);
                    setSearchResults(response.data.results)
                }).catch((error) =>{
                    console.log(error);
                })
        }
        handleSearch();
    } ,[query])



  return (
    <div className='text-white bg-black h-screen'>
        <div>
        <input type="text" placeholder='Enter name of movie' className='w-96 p-2 rounded-lg bg-gray-400 focus:outline-none'value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2  gap-10 mt-8 bg-black w-screen overflow-hidden'>
            {searchResults.map((movie) =>(
                <Card key={movie.id} posterpath={movie.poster_path} onClick={()=> handleCardclick(movie.id)}/>
            ))}
        </div>
    </div>
  )
}


export default Search