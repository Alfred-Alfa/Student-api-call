import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Add from './Component/Add';
import Delete from './Component/Delete';
import Search from './Component/Search';
import View from './Component/View';

function App() {
  return (
    <div >
      <BrowserRouter><Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
