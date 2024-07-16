
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './paginas/Home';
import VideoForm from './paginas/VideoForm';
import Footer from './components/Footer/Footer'
import GlobalStyles from './components/GlobalStyle'




function App() {


        
  return ( 
    <Router>
      <GlobalStyles/>
      <Header />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/formulario" Component={VideoForm}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
