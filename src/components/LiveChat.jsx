import { useEffect, useState } from 'react';
import ChatMessage from './chatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../assets/chatSlice';
import { generateRandomName, makeRandomMessage } from '../assets/helper';

const LiveChat = () => {
  const dispatch=useDispatch();
  const[liveMessage,setLiveMessage]=useState("");


  const chatMessages=useSelector((store)=>store.chat.messages);

  useEffect(()=>{
    const time=setInterval(()=>{
      dispatch(
        addMessage({
          name:generateRandomName(),
          message:makeRandomMessage(25)
        })
      )
    },2000);

    return ()=>clearInterval(time);
  },[])

  return (
    <div className='flex flex-col w-full h-[480px] border border-black rounded-lg'>
      <div className='flex-1 overflow-y-scroll p-2 bg-slate-100 flex flex-col-reverse'>
        <div>
          {chatMessages.map((chat, i) => (
            <ChatMessage key={i} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <div className='border-t border-black p-2 flex'>
        <input
          className='flex-1 px-2 border border-black rounded'
          type='text'
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          onKeyDown={(e) => {if (e.key === "Enter" && liveMessage.trim() !== "") {
          dispatch(
          addMessage({
            name: "Vanshika",
            message: liveMessage,
          })
        );
        setLiveMessage("");
      }
      }}
        />
        <button className='px-4 mx-2 bg-green-100 rounded' onClick={
          ()=>{
            dispatch(
          addMessage(
            {
              name:"Vanshika",
              message: liveMessage,
            }
          ))
        setLiveMessage("");
          }
        }>Send</button>
      </div>
    </div>
  );
    
  
};

export default LiveChat
