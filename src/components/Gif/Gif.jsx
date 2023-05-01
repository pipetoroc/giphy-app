import React from 'react'

function Gif ({ title, id, url }) {
  return (
    <div>
      <h4> {title} </h4>
      <img src={url} key={id} alt={title}/>
    </div>
  )
}

export default Gif
