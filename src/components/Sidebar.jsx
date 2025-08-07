import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isOpen=useSelector((state)=>state.sideBar);
  return (
    <div className='m-2 fixed top-18 left-0 h-full'>
        {!isOpen && <div className='w-24 border-r border-gray-100 shadow-sm'>
        <div className='p-4 w-16'>
            <img src='data:image/png;base64,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'></img>
            <p className='text-xs '>Home</p>
        </div>
        <div className='p-4 w-16'>
            <img src='https://www.iconpacks.net/icons/5/free-youtube-shorts-logo-icon-15251-thumb.png'></img>
            <p className='text-xs '>Shorts</p>
        </div>
        <div className='p-4 w-16'>
            <img src='https://images.icon-icons.com/2248/PNG/512/youtube_subscription_icon_136007.png'></img>
            <p className='text-xs '>Subscriptions</p>
        </div>
        <div className='p-4 w-16'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s'></img>
            <p className='text-xs '>You</p>
        </div>
        <div className='p-4 w-16'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBU45swgcOx15VET05DND3bCngHOxgnAmBQ&s'></img>
            <p className='text-xs '>Downloads</p>
        </div>
        </div>
}
        {isOpen &&<div className= 'overflow-y-auto h-screen w-40 border-r border-gray-100 shadow-sm'>
            <ul>
                <li className='py-2'>Home</li>
                <li className='py-2'>Shorts</li>
                <li className='py-2'>Subscriptions</li>
                <li className='py-2'>History</li>
                <li className='py-2'>Playlists</li>
                <li className='py-2'>Your videos</li>
                <li className='py-2'>Your courses</li>
                <li className='py-2'>Watch Later</li>
                <li className='py-2'>Liked videos</li>
                <li className='py-2'>Downloads</li>
                <li className='py-2'>Shopping</li>
                <li className='py-2'>Music</li>
                <li className='py-2'>Movies</li>
                <li className='py-2'>Live</li>
                <li className='py-2'>Gaming</li>
                <li className='py-2'>News</li>
                <li className='py-2'>Sports</li>
                <li className='py-2'>Courses</li>
                <li className='py-2'>Settings</li>
                <li className='py-2'>Help</li>
                <li className='py-2'>Send Feedback</li>
            </ul>

        </div>}
    </div>
  )
}

export default Sidebar