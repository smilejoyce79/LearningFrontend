import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import A001 from './pages/A001';
import A002 from './pages/A002';
import A003 from './pages/A003';
import A004 from './pages/A004';
import A005 from './pages/A005';
import A006 from './pages/A006';
import A007 from './pages/A007';
import A008 from './pages/A008';
import A009 from './pages/A009';
import A010 from './pages/A010';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/A001' element={<A001/>}/>
        <Route path='/A002' element={<A002/>}/>
        <Route path='/A003' element={<A003/>}/>
        <Route path='/A004' element={<A004/>}/>
        <Route path='/A005' element={<A005/>}/>
        <Route path='/A006' element={<A006/>}/>
        <Route path='/A007' element={<A007/>}/>
        <Route path='/A008' element={<A008/>}/>
        <Route path='/A009' element={<A009/>}/>
        <Route path='/A010' element={<A010/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
