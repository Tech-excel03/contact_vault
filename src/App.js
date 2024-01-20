import './App.css';
import Form from './Component/Login/Form';
import Home from './Component/Landingpage/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

  
  
  return (
     <BrowserRouter>

    <Routes> 

      <Route path='/' element={ <Home />}/>
      <Route path= 'form' element={ <Form />}/>
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
