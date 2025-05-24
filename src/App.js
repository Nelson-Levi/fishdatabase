import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import AddFish from './pages/addfish';
import ReadData from './pages/readdata';
import Layout from './components/layout';
import Submitted from './pages/submitted';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />    
          <Route path='addfish' element={<AddFish />} />
          <Route path='readdata' element={<ReadData />} />
          <Route path='submitted' element={<Submitted />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
