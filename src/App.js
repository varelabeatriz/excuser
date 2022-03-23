import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
