import { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../assets/appSlice';
import { Link } from 'react-router';
import { SEARCH_URL } from '../assets/constants';
import { cacheResults } from '../assets/searchSlice';
const Head = () => {

  const dispatch=useDispatch();
  const searchCache=useSelector((store)=>store.search);

  const [searchQuery, setSearchQuery] =useState('');
  const [show,setShow]=useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }
      else{
        getSearchSuggestions();
      }
    },200);
    // Cleanup function to clear the timeout if the component unmounts or searchQuery changes
    return () => clearTimeout(timer);
  },[searchQuery])

  const getSearchSuggestions = async() => {
     console.log("Calling API for: ", searchQuery);
    const data=await fetch(SEARCH_URL+searchQuery);
    const json=await data.json()
    setSuggestions(json[1])
    dispatch(
      cacheResults({
        [searchQuery]:json[1],
      })
    )
  }
  

  return (
    <div className='grid grid-flow-col h-14 mx-2 my-3 fixed top-0 left-0 w-full z-50 shadow-xl'>
      
        <div className='flex py-1'>
        <img onClick={()=>dispatch(toggle())} className="h-8 pl-2 pr-12" src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png'></img>
        <Link to="/"><img className='h-9 w-12 rounded-md pr-' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydKn90W0BqL7cvCJh806zXFCWoWagwj464w&s'></img></Link>
        <h1 className='text-purple-700 font-mono font-bold text-2xl tracking-wider'>YouVerse</h1>
        </div>
        <div>
        <div className='flex'>
        <input className='px-4 py-3 w-140 h-10 border border-gray-300 rounded-l-full' type='text' placeholder='Search'
        onChange={(e)=>setSearchQuery(e.target.value)}
        value={searchQuery} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        </input>
        <button className=' h-10 w-16 rounded-r-full bg-gray-200 flex items-center justify-center '>
        <img className='h-5 w-5' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1200px-Search_Icon.svg.png'></img>
        </button>
        </div>
        {show && suggestions.length > 0 && <div className='bg-white w-138 px-2 py-1 mx-2 mt-0 rounded-md shadow-lg absolute' onMouseEnter={() =>setShow(true)} onMouseLeave={() => setShow(false)}>
          <ul>
            {suggestions.map((suggestion,index)=>{
              return(
                <li key={index}>{suggestion}</li>
              )
            })}
          </ul>
        </div>}
          
        </div>
        <div> 
        <img className='h-10' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
        </div>
        
    </div>
  )
}

export default Head