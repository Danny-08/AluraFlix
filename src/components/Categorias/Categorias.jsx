import React from 'react';
import "./Categorias.css";
import VideoItem from '../VideoItem/VideoItem';

const Categorias = ({ videos }) => {
  const categorias = ["Frontend", "Backend", "Innovación", "Gestión"];
  const videosPorCategoria = categorias.reduce((acc, categoria) => {
    const videosEnCategoria = videos.filter(video => video.categoria === categoria);
    if (videosEnCategoria.length > 0) {
      acc[categoria] = videosEnCategoria;
    }
    return acc;
  }, {});

  return (
    <div className='container-gral-videos'>
      {Object.keys(videosPorCategoria).map(categoria => (
        <div key={categoria}>
            
          <h3 className={`titulo-categoria ${categoria.toLowerCase().replace(/\s+/g, '')}`}>{categoria.toUpperCase()}</h3>
          <ul className='container-videos'>
            {videosPorCategoria[categoria].map(video => (
              <VideoItem key={video.id} video={video} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Categorias;