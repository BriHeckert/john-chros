import NavbarCustom from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Footer from './Footer'

function App() {
  return (
    <Router>
    <div className="App">
      <NavbarCustom></NavbarCustom>
      <div className="content p-3">
        <Routes>
        <Route path="*" element={<Home />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  </Router>
  );
}

export default App;
