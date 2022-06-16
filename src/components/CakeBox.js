import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const CakeBox = (props) =>  {
  
    const { numOfCakes, buyCake } = props;

  return (
    <div>
        <h2>Number of Cakes - {numOfCakes}</h2>
        <button onClick={buyCake}>Buy Cake</button>
    </div>
  )
}

// this function gets redux state as a parameter and returns an object

// when we want to access the redux state in the component we define mapstateToProps function

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:() =>  dispatch(buyCake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeBox)