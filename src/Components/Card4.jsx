import React from 'react'

function Card4({text,color}) {
  return (
    <button className={`px-3 py-1 ${color}  text-zinc-100 rounded m-2`}>{text}</button>
  )
}

export default Card4