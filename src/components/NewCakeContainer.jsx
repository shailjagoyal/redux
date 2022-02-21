import React , { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div className='text-center mt-4'>
        <h2 className='text-3xl mb-4'>Num of Cakes - {props.numOfCakes} </h2>
        <input className='border border-indigo-600 block mx-auto mb-4 p-1' type="text" value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={() => props.buyCake(number)} className='bg-indigo-600 px-2 text-white'>Buy {number} Cake</button>
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
     buyCake : (number) => dispatch(buyCake(number))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)

