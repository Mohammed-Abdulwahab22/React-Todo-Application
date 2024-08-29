import React from 'react';
import './index.css'; 

const TodoCard = ({id, title, description, imageUrl, createdDate ,onDelete}) => {
  return (
    <li className="todo-card">
      <div className="todo-card-header">
        <h2 className="todo-card-title">{title}</h2>
        {imageUrl && <img src={imageUrl} alt="Todo" className="todo-card-image" />}
      </div>
      <p className="todo-card-description">{description}</p>
      <div className="todo-card-footer">
        <span className="todo-card-created">Created on {createdDate}</span>
      </div>
      <button onClick={() => onDelete(id)} className="delete-button">Delete</button>
    </li>
  );
};

export default TodoCard;
