import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
