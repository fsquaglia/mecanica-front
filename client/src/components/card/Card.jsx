import React from 'react'

const Card = ({info}) => {
    const {url}=info;
  return (
    <div>
    <img src={url} style={{maxWidth: '12.5rem', zIndex: "2"}} />
    </div>
  )
}

export default Card