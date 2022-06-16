import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

const IceContainer = (props) =>  {
  
    const { numOfIceCreams, buyIceCream } = props;

  return (
    <div>
        <h2>Number of IceCreams - {numOfIceCreams}</h2>
        <button onClick={buyIceCream}>Buy IceCream</button>
    </div>
  )
}

// this function gets redux state as a parameter and returns an object

// when we want to access the redux state in the component we define mapstateToProps function

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream:() =>  dispatch(buyIceCream())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IceContainer)



