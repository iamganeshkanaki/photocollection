import './App.css';
import { Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SingIn';
import Gallery from './Pages/Gallery/Gallery';
import Home from "./Pages/Demo/Home.jsx";
import ImageUpload from './Pages/Image/Image.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/upload' element={<ImageUpload />} />
      </Routes>


    </div>
  );
}

export default App;
