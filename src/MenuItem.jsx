import React from 'react'

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
        </header>
      </div>
    </article>
  );
};

export default MenuItem

// - s7-197:Cr8 MenuItem component base
// - s7-197:Add 4 param on MenuItem(img, title, price & desc)
// - s7-197:pass in img & title at img section
// - s7-197:Add menu-item className at article
// - s7-197:Add div with className item-info
// - s7-197:Add header, h5 & pass in title