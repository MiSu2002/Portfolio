import './App.css';
import Body from './components/body';
import AboutMe from './pages/aboutMe';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element={<Body/>}></Route>
      <Route path = "/about" element={<AboutMe/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
