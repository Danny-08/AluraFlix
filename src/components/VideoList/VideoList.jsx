import React, { useEffect, useState } from 'react';
import Categorias from '../Categorias/Categorias';
import styled from 'styled-components';

const Main = styled.main`
display: flex;
justify-content: center
`
const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(response => response.json())
      .then(data => {
        console.log("Datos recibidos:", data);
        setVideos(data);
      })
      
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  
  

  return (
    
      
    <Main style={{textAlign:"center"}}>
     
      <Categorias videos={videos} />
    </Main>
  );
};

export default VideoList;