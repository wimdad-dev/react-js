import RightCardContent from "./RightCardContent.jsx";
import React from "react";

const RightCard = (props) => {
  return (
    <div className='h-fit shrink-0 overflow-hidden relative w-80 rounded-4xl'>
        <img className="h-full w-full object-cover" src={props.img} alt=''/>
        <RightCardContent tag = {props.tag} id = {props.id}/>
    </div>
  )
}

export default RightCard