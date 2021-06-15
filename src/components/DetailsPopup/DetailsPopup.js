import React, { useState } from "react"

const DetailsPopup = ({ CardComponent, DetailsComponent }) => {
    const [displayPopup, setDisplayPopup] = useState(false)
   
    const handleClick = () => {
      setDisplayPopup(prevBool => !prevBool)
    }
 
    const Component = displayPopup ? DetailsComponent : CardComponent
    return (
      <div className="details-popup" onClick={handleClick}>
        {Component}
      </div>
    )
}

export default DetailsPopup