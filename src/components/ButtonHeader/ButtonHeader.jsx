import React, { useState } from 'react';

const ButtonHeader = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`btn ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{
        backgroundColor:  '#000000E5',
    color: isActive ? '#2271D1' :'#FFFFFF' ,
        border : isActive ? '2px solid #2271D1' : '2px solid #F5F5F5',
      }} 
    >
      {label}
    </button>
  );
};

export default ButtonHeader;
