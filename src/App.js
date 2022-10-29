import './App.css';
import Body from './components/body';
import AboutMe from './pages/aboutMe';
import Education from './pages/Education';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element={<Body/>}/>
      <Route path = "/about" element={<AboutMe/>}/>
      <Route path = "/ed" element={<Education/>}/>
      </Routes>
    </div>
  );
}

export default App;
