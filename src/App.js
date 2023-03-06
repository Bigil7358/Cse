import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Materials from './components/Materials/Materials';
import Navbar from './components/Navbar/Navbar';
import Syllabus from './components/Syllabus/Syllabus';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/syllabus"><Syllabus/></Route>
        <Route path="/materials"><Materials/></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
