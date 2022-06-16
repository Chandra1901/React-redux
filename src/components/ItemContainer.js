import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

function ItemContainer (props) {

    const { item, buyItem } = props
  return (
    <>
      <h2>Item - {item}</h2>
      <div>
        <button onClick={buyItem}>Buy Items</button>
      </div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams
  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
  return {
    buyItem: dispatchFunction
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer)


// How to use connect function  if we only want to dispatch actions but not subscribe to the state changes in a row 

// here we need to pass null  as the first argument 