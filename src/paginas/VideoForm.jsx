import './VideoForm.css'
import React, { useState } from 'react';

const VideoForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [videoDescription, setVideoDescription] = useState('');

  const categories = ['Frontend', 'Backend', 'Innovación', 'Gestión'];

  const handleReset = () => {
    setTitle('');
    setCategory('');
    setImageLink('');
    setVideoLink('');
    setVideoDescription('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const videoData = {
      titulo: title,
      categoria: category,
      imagen: imageLink,
      video: videoLink
    };
  
    try {
      const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(videoData)
      });
  
      if (!response.ok) {
        throw new Error('Error al guardar el video');
      }
  
      console.log('Video guardado exitosamente');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="container">
<div className='main-title'>
    <h1 className='title'>NUEVO VIDEO</h1>
    <p className='sub-title'>Complete el formulario para crear una nueva tarjeta de video</p>
</div>
    
    <form onSubmit={handleSubmit}>
      <h2>Crear Tarjeta</h2>
      
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        placeholder='ingrese el título'
          required
        />
      </div>
      <div>
        <label htmlFor="category">Categoría:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Elige una opción</option>
          {categories.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="imageLink">Enlace a la imagen:</label>
        <input
          type="text"
          id="imageLink"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        placeholder='ingrese el enlace a la imagen'
          required
        />
      </div>
      <div>
        <label htmlFor="videoLink">Enlace al video:</label>
        <input
          type="text"
          id="videoLink"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        placeholder='ingrese el enlace al video'
        required/>
      </div>
      <div className='textarea'>
        <label htmlFor="videoDescription">Descripción del video:</label>
        <textarea
          id="videoDescription"
          value={videoDescription}
          onChange={(e) => setVideoDescription(e.target.value)}
          placeholder='¿de qué se trata este video'
          required
        ></textarea>
      </div>
      <div></div>
        <button className='btn-form' type="submit">Guardar</button>
      <button className='btn-form' type='button' onClick={handleReset}>Limpiar</button>
     
      
    </form>
    </div>
  );
};

export default VideoForm;
