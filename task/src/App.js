import logo from './logo.svg';
import './App.css';
import Task from './task';
import Task1 from './task1';
import Task2 from './task2';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
       {/* <div>
        <Task/>
        <Task1/>
        <Task2/>
       </div> */}
     
     <div>
         <BrowserRouter>
          <Routes>
          {/* <Route path='/' element={<Task/>}/> */}
           <Route path='/' element={[<Task1/>,<Task2/>]}/>
           {/* <Route path='/' element={<Task2/>}/> */}
          </Routes>
         </BrowserRouter>
      </div>    
    </>    
  );
}

export default App;
