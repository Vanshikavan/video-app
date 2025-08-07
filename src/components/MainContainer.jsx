import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    
      <div className="flex flex-col overflow-hidden">
        <div className=" top-0 bg-white z-20 shadow w-[calc(100%-8px)]">
          <ButtonList />
        </div>
        <div className="overflow-y-auto  p-3">
          <VideoContainer/>
        </div>
      </div>
    
    
  )
}

export default MainContainer