import React from 'react';
import './index.css';

const Timeline = ({ items }) => (
  <ul className="list">
    {items.map((item, index) => {
      return (
        <li
          key={index}
          className="animate"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {item}
          <span className="button">削除</span>
        </li>
      );
    })}
  </ul>
);

export default Timeline;
