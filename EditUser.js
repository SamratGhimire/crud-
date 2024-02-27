import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/users/" + id)
      .then(response => {
        const data = response.data;
        setName(data.name);
        setUserName(data.username);
      })
      .catch(error => console.log(error))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:8000/users/" + id, {
      name,
      username
    })
      .then(response => {
        setData(response.data);
        navigate('/')
      })
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center bg-slate-100 p-10 mt-10 rounded-md'>
          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="text" placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='my-2 px-5 py-1 rounded-full border border-gray-600'
            type="text" placeholder="UserName"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="flex my-2">
            <button
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'>
              EDIT
            </button>
            <button
              onClick={goHome}
              className='text-white mx-1 px-5 py-1 rounded-full bg-blue-500 hover:bg-blue-700'
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>

  );
}

export default EditUser;

// import React, {useEffect, useState} from "react";
// import Employees from "./Employees";
// import {v4 as uuid} from "uuid"
// import { Link, useNavigate } from 'react-router-dom';
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// function Edit(){
//     const[name, setName] = useState("");
//     const[address, setAddress] = useState("");
//     const[id, setId] = useState("");

//     let history = useNavigate();

//     var index = Employees.map(function(e){
//         return e.id
//     }).indexOf(id);


//     const handleSubmit =(e) => {
//         e.preventDefault();

//         let a = Employees[index];
//         a.Name = name;
//         a.Address = address;

//         history("/");
//     }

//     useEffect(() =>{
        // setName(localStorage.getItem('Name'))
        // setAddress(localStorage.getItem('Address'))
        // setId(localStorage.getItem('Id'))
//         axios.get('http://localhost:3030/users')
//         .then(res => setData(res.data))
//         .catch(err => console.log(err))
//     },[])


//     return(
//         <div>
//             <Form>
//                 <FormGroup className="" controlId="forName">
//                     <FormControl type="text" placeholder="Enter Name" value={name.data} required onChange={(e) => setName(e.target.value)}>
//                     </FormControl>
//                 </FormGroup>
//                 <FormGroup className="" controlId="forAddress">
//                     <FormControl type="text" placeholder="Enter Address" value={address.data} required onChange={(e) => setAddress(e.target.value)}>
//                     </FormControl>
//                 </FormGroup>
//                 <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
//             </Form>
//         </div>
//     )
// }

// export default Edit;