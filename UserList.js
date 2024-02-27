import { Link } from "react-router-dom";

const UserList = ({ users, loading, deleteUser }) => {

  return (
    <div className='py-5'>
      {loading && <p>loading ...</p>}
      {users &&
        <ul>
          {(users.map((user) =>
            <li className='flex justify-between border-b-4' key={user.id}>
              <div className="flex ">
                <p className='my-3 px-3'>{user.name}</p>
                <p className='my-3 px-3'>{user.username}</p>
              </div>
              <div>
                <Link to={`/edit/${user.id}`}>
                  <button
                    className='mx-2 my-3 px-2 py-1 text-green-800
                       hover:bg-green-400 hover:rounded-md hover:border hover:border-green-800'
                  >EDIT</button>
                </Link>
                <button
                  className='my-3 px-2 py-1 text-red-800 
                        hover:bg-red-400 hover:rounded-md hover:border hover:border-red-800'
                  onClick={() => deleteUser(user.id)}
                >Delete</button>
              </div>
            </li>
          ))}
        </ul >
      }
    </div >
  )
}

export default UserList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';




// function Users(){
//     const [users, setData] = useState([]);
//     const [newData,setNewData] = useState([{id:'', name:'', address:''}])
//   useEffect(()=> {
//     axios.get('http://localhost:3031/users')
//     .then(res => setData([...res.users]))
//     .catch(err => console.log(err))
//   }, [])

//   function addUsers(){
//     axios.post("http://localhost:3031/users")
//     .then((res)=>{
//         console.log("After post",res)
//     })
    
//   }

// return(
//     <div>
//         <table className='table'>
//             <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Address</th>
//             </tr>
//         </table>
//         <tbody>
//             {users.map((d, i)=>{
//                 return <tr key={i}>
//                     <td>{d.id}</td>
//                     <td>{d.name}</td>
//                     <td>{d.address}</td>
//                 </tr>
//             })}
//         </tbody>
//     </div>
// )


// }
// export default Users();
