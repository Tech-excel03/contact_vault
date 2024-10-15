import './App.css';
import Home from './Component/Landing/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NextPage from './Component/Next/NextPage';
import ForgetPassword from './Component/Forget/ForgetPassword';
import Newuser from './Component/Newuser/Newuser';
import './Component/CSS/Contact_vault.css';
import Login from './Component/form/Login';

function App() {
  return (
     <BrowserRouter>
   <Routes> 
   <Route path='/' element={<Home />}/>
   <Route path='/NextPage' element={<NextPage />}/>   
   <Route path='/ForgetPassword' element={<ForgetPassword />}/>   
   <Route path='/Newuser' element={<Newuser/>}/>  
   <Route path ='./Login'element={<Login/>} />
</Routes> 
</BrowserRouter>
  );
}

export default App;
