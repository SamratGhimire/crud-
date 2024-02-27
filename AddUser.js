import React, { useState } from 'react';
import axios from "axios";

const AddUser = ({ setUsers, users }) => {
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/users`, { name, username })
            .then((res) => {
                setUsers([...users, res.data])
                setName('');
                setUserName('');
            });
    };

    return (
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly'>
                    <div className='mb-2'>
                        <input
                            className='px-3 py-1 rounded-full border border-gray-600'
                            value={name} onChange={(e) => setName(e.target.value)} required
                            type="text" placeholder="Name" />
                    </div>
                    <div className='mb-2'>
                        <input
                            className='px-3 py-1 rounded-full border border-gray-600'
                            value={username} onChange={(e) => setUserName(e.target.value)} required
                            type="text" placeholder="UserName" />
                    </div>
                    <div className='mb-2'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full">
                            Add
                        </button>
                    </div>
                </div>
            </form>
    );
}

export default AddUser;

// import React, {useState} from "react";
// import Employees from "./Employees";
// import {v4 as uuid} from "uuid"
// import { Link, useNavigate } from 'react-router-dom';
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// function Add(){

//     const[name, setName] = useState("");
//     const[address, setAddress] = useState("");

//     const [inputData, setInputData] = useState({name:'', address:'', })

//     let history = useNavigate();

//     const handleSubmit =(e) => {
//         e.preventDefault();

        // axios.post('http://localhost:3030/users', inputData)
        // .then(res => {
        //     alert("data added successfully!")
        // })

        //   function addUsers(){
        //     axios.post("http://localhost:3031/users")
        //     .then((res)=>{
        //         console.log("After post",res)
        //     })

//         const ids = uuid()
//         let uniqueId = ids.slice(0,8);

//         let a = name,
//         b = address;

//         Employees.push({id: uniqueId, Name : a, Address: b});

//         history("/");
//     }

//     return(
//         <div>
//             <Form>
//                 <FormGroup className="" controlId="forName">
//                     <FormControl type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
//                     </FormControl>
//                 </FormGroup>
//                 <FormGroup className="" controlId="forAddress">
//                     <FormControl type="text" placeholder="Enter Address" required onChange={(e) => setAddress(e.target.value)}>
//                     </FormControl>
//                 </FormGroup>
//                 <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
//             </Form>
//         </div>
//     )
// }

// export default Add;