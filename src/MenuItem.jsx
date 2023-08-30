import React from 'react'

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className="img" />
    </article>
  );
};

export default MenuItem

// - s7-197:Cr8 MenuItem component base
// - s7-197:Add 4 param on MenuItem(img, title, price & desc)
// - s7-197:pass in img & title at img section
// - s7-197:Add menu-item className at article