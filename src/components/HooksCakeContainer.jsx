import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
 
  return (
    <div className='text-center mt-6'>
        <h2 className='text-3xl mb-4'>Number of Cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())} className='bg-indigo-600 px-2 text-white'>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer