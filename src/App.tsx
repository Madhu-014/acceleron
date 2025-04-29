import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Storage from './Pages/Storage';
import Disk from './Pages/Disk';
import Network from './Pages/Network';
import Filesystem from './Pages/Filesystem';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen w-screen bg-white text-black transition-colors duration-300 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 h-full">
          <Header />
          <div className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Disk" element={<Disk />} />
              <Route path="/Storage" element={<Storage/>} />
              <Route path="/Network" element={<Network/>} />
              <Route path="/Filesystem" element={<Filesystem/>} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
