import Navbar from './components/Navbar';
import Adduser from './components/Adduser';
import GenericCMS from './components/GenericCMS';
import Edituser from './components/Edituser';
import Settings from './components/settings';
import Blog from './components/blog'

import './App.css';
import Allusers from './components/Allusers';

import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<GenericCMS/>}/>
        <Route path='/all' element={<Allusers/>}/>
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/edit/:id' element={<Edituser/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
