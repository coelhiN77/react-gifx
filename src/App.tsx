import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroScreen from './components/Pages/IntroScreen';
import Home from './components/Pages/Home';

//Routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;