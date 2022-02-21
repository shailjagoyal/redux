import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
  return (
    <div className='text-center mt-4'>
        <h2 className='text-3xl mb-4'>Num Of Icecream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream} className='bg-indigo-600 px-2 text-white'>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)