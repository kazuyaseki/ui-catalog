import React from 'react';
import './ListAppear.css';

const ListAppear = ({ items }) => (
  <div>
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
  </div>
);

export default ListAppear;
