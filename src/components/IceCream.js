import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  buyIceCream } from '../redux';

// useSelector is a hook that react redux library provides 

const IceCream = () => {
  
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)

  const dispatch = useDispatch();

  return (
    <div>
        <h2>Number Of IceCreams - {numOfIceCreams}</h2>
        <button onClick={() => dispatch(buyIceCream())}>
            Buy IceCream
        </button>
    </div>
  )
}

export default IceCream
