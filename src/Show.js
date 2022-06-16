import React from 'react'
import { useSelector } from 'react-redux'

const Show = () => {

    const count = useSelector((state) => {
        return state.count
    })
  return (
    <div>
        <h2>Counter - {count}</h2>
    </div>
  )
}

export default Show