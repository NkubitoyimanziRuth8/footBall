
import './App.css';
import Shop from "./components/shop";
import About from './components/about';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="shop" element={<Shop/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
       </Routes>
     </Router>
    </div>
  );
}


export default App;
