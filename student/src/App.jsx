import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';
import Counter from './pages/Counter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
