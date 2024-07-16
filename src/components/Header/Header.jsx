import "./Header.css"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonHeader from '../ButtonHeader/ButtonHeader';

const Header = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(' ');

  useEffect(() => {
    // Aquí puedes definir lógica adicional si es necesario
  }, []);

  const handleButtonClick = (route) => {
    setActiveButton(route);
    navigate(`/${route}`);
  };

  return (
    <header className='header'>
        <img src="./img/logo.png" alt="logoAlura" />
        <div className="butons">
           <ButtonHeader
        label="Home"
        onClick={() => handleButtonClick('home')}
        isActive={activeButton === 'home'} 
      />
      <ButtonHeader
        label="Formulario"
        onClick={() => handleButtonClick('formulario')}
        isActive={activeButton === 'formulario'}
      /> 
        </div>
      
    </header>
  );
};

export default Header;