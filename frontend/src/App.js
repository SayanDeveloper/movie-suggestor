import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/movie/:movieIndex' element={<DetailsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;