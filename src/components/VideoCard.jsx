import { useSelector } from "react-redux"

const VideoCard = ({data}) => {

  const isOpen=useSelector((state)=>state.sideBar);
 
 const {channelId,channelTitle,title} = data.snippet
 const {viewCount} = data.statistics 
 const {medium} = data.snippet.thumbnails

 const widthClass = isOpen ? "w-75" : "w-79";
  return (
    <div className={`${widthClass} bg-slate-50 shadow-xl p-2 rounded-md m-3`}>
      <div>
        <img src={medium.url} 
          className="w-full rounded-md"
        />
      </div>
      <ul>
        <li className="truncate  text-neutral-700">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard