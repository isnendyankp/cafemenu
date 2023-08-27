import React from 'react'

const Title = ({text}) => {
  return (
    <div className="title">
      <h2>{text || 'Default Title'}</h2>
      <div className="title-underline"></div>
    </div>
  );
}

export default Title

// progress:
// - s7-195:cr8 base Title component
// - s7-195:Add prop text on title
//-  s7-196:cr8 div with classname title
// - s7-196:pass in text & if not will return default title
// - s7-196:Add div with className title-underline