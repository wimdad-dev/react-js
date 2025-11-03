import React, { useState } from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  // 1. Set up the state for bookmarking
  const [isBookmarked, setIsBookmarked] = useState(false);

  // 2. Create the click handler function
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked); // Toggles the state
  };

  return (
    <div className="card">
      
      <div>
        <div className="top">
          <img src={props.img} />
          
          {/* 3. Added onClick and conditional text */}
          <button onClick={handleBookmarkClick}>
            {isBookmarked ? 'Bookmarked' : 'Bookmarked it'} <Bookmark />
          </button>
        </div>

        <div className="center">
          <h3> {props.platform} <span>5 days ago </span></h3>
          <h2>Senior Ui/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <div className='logo'>
          <button onClick={
            () => {
              window.open(props.url, '_blank', 'noopener,noreferrer');
            }
          }>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card