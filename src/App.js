import './App.css';
import HeaderBar from './HeaderBar';
import HomePage from './pages/HomePage';
import Transcation from './pages/Transcation';
import Data from './pages/Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <HeaderBar />
            <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/trans' element={<Transcation />}/>
            <Route path='/data' element={<Data />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
