import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Addvisitor from './components/Addvisitor';
import Viewvisitor from './components/Viewvisitor';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={ <Login/> }/>
    <Route path="/add" element={ <Addvisitor/> }/>
    <Route path="/viewall" element={ <Viewvisitor/> }/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;