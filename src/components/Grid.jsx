// Layout component that displays items in a responsive grid
import React from 'react';
import './Grid.css';

export default function Grid({ children }) {
  return <div className='grid-container'>{children}</div>;
}
