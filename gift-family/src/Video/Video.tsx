import React from 'react'

function Video (props: any) {
  return (
    <video autoPlay={true} muted={true}>
      <source src={props.url} />
    </video>
  )
}

export default Video