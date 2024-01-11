// src/components/ActionList.js
import React from 'react';

const ActionList = ({ actions }) => {
  return (
    <div className="action-list">
      <h2>Action List</h2>
      <ul>
        {actions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActionList;
