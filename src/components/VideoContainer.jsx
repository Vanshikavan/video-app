import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../assets/constants';
import VideoCard from './VideoCard'
import { Link } from 'react-router';

const VideoContainer = () => {

  const [video,setVideo]=useState([])
   useEffect(()=>{
    getData();
  },[])
  const getData=async()=>{
  const data=await fetch(YOUTUBE_API_URL);
  const json=await data.json();
  setVideo(json.items)
  }

  return (
    <div className='flex flex-wrap'>
      {
      video.length > 0 && (
        video.map((v,index) => (
         <Link to={`video/${v.id}`} key={index} > <VideoCard data={v} key={index} /></Link>
        ))
      )
      }
    </div>
  )
}

export default VideoContainer
