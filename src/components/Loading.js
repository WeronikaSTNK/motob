import React from 'react'
import loadingGif from '../images/loader.gif'
export const Loading = () => {
  return (
    <div className="loading">
      <h1>Loading...</h1>
      <img src={loadingGif} style={{height: "65px", width:"65px"}} alt='' />
    </div>
  )
}

export default Loading
