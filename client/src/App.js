import { useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import {getAllQuestion} from './actions/question'
import { getAllUsers } from './actions/users';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllQuestion())
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <div className="App"> 
        <BrowserRouter>
          <Navbar/>
          <AllRoutes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
