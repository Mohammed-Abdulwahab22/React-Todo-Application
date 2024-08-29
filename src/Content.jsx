import React, { useContext, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import MyContext from './MyContext';
import TodoCard from './TodoCard'
import { v4 as uuidv4 } from 'uuid'; 


export default function Content() {
  const { cards, setCards ,search} = useContext(MyContext)

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return; 

    const newCard = {
      id: uuidv4(), 
      title,
      description,
      imageUrl, 
      createdDate: new Date().toISOString(),
    };

    
    setCards([...cards, newCard]);

    
    try {
      const response = await fetch('http://localhost:3000/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });
      if (!response.ok) throw new Error('Failed to add card');
    
    } catch (error) {
      console.error(error);
    }

    
    setTitle('');
    setDescription('');
    setImageUrl('')
  };

  const handleDelete = async (id) => {
    setCards(cards.filter(card => card.id !== id));

    try {
      const response = await fetch(`http://localhost:3000/cards/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete card');
    } catch (error) {
      console.error(error);
    }
  };

  const filteredCards = cards.filter(card => 
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <form className="content" onSubmit={handleSubmit}>
      <ul className='cards-view'>
        {filteredCards.map((card) => (
          <TodoCard key={card.id} id={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} createdDate={card.createdDate} onDelete={handleDelete} />
        ))}
      </ul>
      <div className='input-container'>
      <input
          className='input-title'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className='input-description'
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className='input-description'
          placeholder='Image-URL'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button className="plus-icon" type='submit'>
        <AiOutlinePlusCircle size={40} />
      </button>
    </form>
  )
}
