import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div className='text-center mt-4'>
        <h2 className='text-3xl mb-4'>Num of Cakes - {props.numOfCakes} </h2>
        <button onClick={props.buyCake} className='bg-indigo-600 px-2 text-white'>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes : state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
   return {
     buyCake : () => dispatch(buyCake())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

