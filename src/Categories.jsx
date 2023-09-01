import React from 'react'

const Categories = ({categories}) => {
  return (
    <div className='btn-container'>
        {categories.map((category) => {

        })}
    </div>
  )
}

export default Categories

// - s7-199:Cr8 base Categories component
// - s7-199:Add categories prop to Categories component
// - s7-199:Add map method for categories
// - s7-199:Add parameter category for array categories