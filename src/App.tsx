import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';
import Ideology from './pages/Ideology';
import Leadership from './pages/Leadership';
import Contributions from './pages/Contributions';
import Join from './pages/Join';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="ideology" element={<Ideology />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="contributions" element={<Contributions />} />
          <Route path="join" element={<Join />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
