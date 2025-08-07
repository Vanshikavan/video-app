import React from 'react'
import { Outlet, useParams } from 'react-router';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const {id} = useParams()
  return (
    <div>
      <div className='flex'>
       <iframe width="2800" height="480" src={`https://www.youtube.com/embed/${id}?si=aGB5QipgriziWWL_`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
       <LiveChat/>
       </div>
       <div>
        <CommentsContainer/>
       </div>
    </div>
  )
}

export default WatchPage;