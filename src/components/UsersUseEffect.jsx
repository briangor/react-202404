import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export default function UsersUseEffect() {
    const [users, setUsers] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        async function fetchData() {
            // You can await here
            //const response = await MyAPI.getData(someId);
            try {
                const response = await axios.get(url);
                setUsers(response.data);
                console.table(response.data);
            } catch (error) {
                console.log(error);
            }
          }
          fetchData();

    }, []);

    //console.log(users);
  return (
    <div>
        <p><Link to={'/'}>home</Link></p>
        <h2> <Link to={'/users1'}>UsersUseEffect</Link> </h2>
        {users && 
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        }
    </div>

  )
}
