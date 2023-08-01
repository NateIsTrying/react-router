import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import Barbie from './components/Barbie';
import Oppenheimer from './components/Oppenheimer';
import GrandBudapest from './components/GrandBudapest';

const App = () => {

  return (
    <div id='container'>
      <div id='navbar'>
        <Link to='/'><button className='home'>Home</button></Link>
        <Link to='/blue'><button className='blue'>Blue</button></Link>
        <Link to='/red'><button className='red'>Red</button></Link>
        <Link to='/barbie'><button className='barbie'>Barbie</button></Link>
        <Link to='/oppenheimer'><button className='oppenheimer'>Oppenheimer</button></Link>
        <Link to='/grandBudapest'><button className='grandBudapest'>Grand Budapest</button></Link>
      </div>
      <div id='main-section'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blue' element={<Blue />}></Route>
          <Route path='/red' element={<Red />}></Route>
          <Route path='/barbie' element={<Barbie />}></Route>
          <Route path='/oppenheimer' element={<Oppenheimer />}></Route>
          <Route path='/grandBudapest' element={<GrandBudapest />}></Route>
        </Routes>
      </div>
      <div id='footer'>
        <Link to='/'><button className='home'>Home</button></Link>
        <Link to='/blue'><button className='blue'>Blue</button></Link>
        <Link to='/red'><button className='red'>Red</button></Link>
        <Link to='/barbie'><button className='barbie'>Barbie</button></Link>
        <Link to='/oppenheimer'><button className='oppenheimer'>Oppenheimer</button></Link>
        <Link to='/grandBudapest'><button className='grandBudapest'>Grand Budapest</button></Link>
      </div>
    </div>
  )
}

export default App
