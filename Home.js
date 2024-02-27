import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:8000/users")
      .then(response => {
        setUsers(response.data)
      })
    setLoading(false)
  }, [])

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8000/users/${id}`).then((response) => {
      const newUser = users.filter((user) => user.id !== id);
      console.log(response)
      setUsers(newUser);
    }).catch(error => {
      console.log(error)
    });
  }

  return (
    <div className="max-w-xl pb-8 mx-auto px-5 bg-slate-100">
      <UserList
        users={users}
        loading={loading}
        deleteUser={deleteUser}
      />
      <AddUser
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default Home;


// import React, { Fragment } from "react";
// import axios from "axios";
// import {Link,useNavigate} from 'react-router-dom';
// import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


// function Home(){

//     let history = useNavigate();

//     const handleEdit = (id , name , address) =>{
        //{///// localStorage.setItem('Name', name)
        // localStorage.setItem('Address', address)
        // localStorage.setItem('Id', id) /////}

        // const [users, setData] = useState([]);
    //     const [newData,setNewData] = useState([{id:'', name:'', address:''}])
    //     useEffect(()=> {
    //         axios.put('http://localhost:3031/users')
    //         .then(res => console.log('successful'))
    //         .catch(err => console.log(err))
    //     }, [])
    // }

    // const handleDelete = (id) => {
    //     var index = Employees.map(function(e){
    //         return e.id
    //     }).indexOf(id);

    //     Employees.splice(index,1);

    //     history('/');
    // }

    // return(
    //     <Fragment>
    //         <div >
    //             <table>
    //                 <thead>
    //                     <tr>
    //                         <th>
    //                             Name
    //                         </th>
    //                         <th>
    //                             Address
    //                         </th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {
    //                         Employees && Employees.length > 0
    //                         ?
    //                         Employees.map((item) =>{
    //                             return(
    //                                 <tr>
    //                                     <td>
    //                                         {item.Name}
    //                                     </td>
    //                                     <td>
    //                                         {item.Address}
    //                                     </td>
    //                                     <td>
    //                                         <Link to={'/edit'}>
    //                                             <button onClick={() => handleEdit(item.id, item.Name, item.Address)}>Edit</button>
    //                                         </Link>

    //                                         &nbsp;
    //                                         <button onClick={() => handleDelete(item.id)}>Delete</button>
    //                                     </td>
    //                                 </tr>
    //                             )
    //                         })
    //                         :
    //                         "No data available"
    //                     }
    //                 </tbody>
    //             </table>
    //         </div>
    //         <br>
    //         </br>
    //         <Link to={'/add'}>
    //             <Button size="lg">Create</Button>
    //         </Link>
    //     </Fragment>
    // )
// }

// export default Home;