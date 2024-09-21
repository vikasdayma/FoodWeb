import React from "react";
const BackgroundCircle=({design})=>{
    return(
      <div className={` ${design}   absolute top-1/2 left-1/2  aspect-square borderWhite  rounded-full -translate-x-1/2 -translate-y-1/2  `}>
  
      </div>    
    );
}
export default BackgroundCircle