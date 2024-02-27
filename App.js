import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import EditUser from './Components/EditUser';
import AddUser from './Components/AddUser';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/create' element={< AddUser />} />
      </Routes>
    </>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Home from './Components/Home';
// import Add from './Components/Add';
// import Edit from './Components/Edit';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// function App(){
//   return (
//     <div className='App'>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/create'  element={<Add />} />
//           <Route path='/edit'  element={<Edit />} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }




// export default App;
