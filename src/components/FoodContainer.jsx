import React, { useEffect }  from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../redux'

function FoodContainer( {foodData , fetchData }) {

    useEffect(() => {
        fetchData()
    }, [])

  return foodData.loading ? (
      <h2>Loading</h2> 
  ) : foodData.error ? (
      <h2>{foodData.error}</h2>
  ) : (
      <div className='text-center'>
          <h2 className='text-2xl mb-4'>FoodList </h2>
          <div>
              {foodData && foodData.food.map((item) => 
              <div key={item.food.foodId}>
                  <img className='mx-auto' src={item.food.image} alt="" />
                  <p>{item.food.category}</p>
                  <p className='mb-3'>Label : {item.food.label}</p>
              </div>
              )}
          </div>
      </div>
  )
}

const mapStateToProps = state => {
    return {
        foodData : state.food
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData : () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer)
