import React from 'react';
import './IconPane.css';

const icons = [
  '/icons/icon1.png',
  '/icons/icon2.png',
  '/icons/icon3.png',
  '/icons/icon4.png',
  '/icons/icon5.png',
  '/icons/icon6.png',
];

const IconPane = () => {
  return (
    <div className="left-pane">
      <ul>
        {icons.map((icon, index) => (
          <li key={index}>
            <img src={icon} alt={`icon${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconPane;
