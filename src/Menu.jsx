import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((MenuItem) =>{
        return <MenuItem />
      })}
    </div>
  )
}

export default Menu

// Progress:
// - s7-197:Cr8 menu.jsx file with base structure
// - s7-197:Add prop items on Menu
// - s7-197:Add section-center className at div
// - s7-197:Add call map function for parameter items
// - s7-197:Add Menuitem para for items.map
// - s7-197:Add return with pass in Menuitem