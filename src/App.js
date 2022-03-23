import './styles.scss';
import { Routes, Route } from 'react-router-dom'
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;
