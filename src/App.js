import logo from './logo.svg';
import './App.css';
import { use } from 'react';
import {useState} from 'react';
import BlogListPage from './pages/BlogListPage'
import CounterListPage from './pages/CounterListPage'
import { Route, Routes } from "react-router-dom";


function App() {

  // const [count, setCount] = useState(0);

  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  // const handleDecreae = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1>Count: {count}</h1>
  //     <button onClick ={handleIncrease}>increase</button>
  //     <button onClick ={handleDecreae}>decrease</button>
  //     </header>
  //   </div>
  // );

  return (
    <Routes>
        <Route path = {"/products"}  element={<BlogListPage />}   />
        <Route path = {"/counter"}  element={<CounterListPage />}   />
    </Routes>
  )

}

export default App;
