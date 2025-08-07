import React, { useState } from 'react'

const commentsData=[
        {
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[]
        },
        {
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[
                {
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[
                {
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[{
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[{
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[{
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[{
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[]
        }]
        }]
        }]
        }]
        }
            ]
        },{
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[{
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[{
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[]
        }]
        }]
        }
            ]
        },
        {
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[]
        },
        {
            name : "Vanshika",
            text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae, nobis quae voluptate, quasi at dicta fugiat qui nam excepturi repellat officia vero deleniti nemo dolorem soluta, minima maxime! Odit!",
            replies:[]
        }
    ]

const CommentWithReplies=({comment})=>{
    const [showReply,setShowReply]=useState(false);
    const hasReplies=comment.replies && comment.replies.length>0;
    return(
        <div className='my-2'>
            <Comment data={comment}/>
        {hasReplies && <button
          onClick={() => setShowReply(!showReply)}
          className="text-sm text-blue-600 ml-5"
        >
          {showReply ? 'Hide replies' : `View ${comment.replies.length} replies`}
        </button>
            }

            {showReply && (
                <div className="pl-5 border-l border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
            )}
        </div>
    )
}


const Comment=({data})=>{
    const { name, text} = data;
    return(
        <div className='flex py-3'>
            <img className='h-8' alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'></img>
            <div className="px-3">
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
                <p>Reply</p>
            </div>

        </div>
    )
}

const CommentsList=({comments})=>{
    return comments.map((comment,index)=>(
        <CommentWithReplies key={index} comment={comment}/>
    ))
}
    
const CommentsContainer = () => {
    
  return (
    <div className='my-4 w-230'>
        <p className='font-bold'>Comments</p>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer