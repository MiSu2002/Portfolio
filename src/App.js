import './App.css';
import Body from './components/body';
import AboutMe from './pages/aboutMe';
import Education from './pages/Education';
import Transcripts from './pages/transcripts';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element={<Body/>}/>
      <Route path = "/about" element={<AboutMe/>}/>
      <Route path = "/ed" element={<Education/>}/>
      <Route path = "/transcripts" element={<Transcripts/>}/>
      </Routes>
    </div>
  );
}

export default App;
