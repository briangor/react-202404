import { useQuery } from "react-query";
import axios from "axios";

export default function UsersReactQuery() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const getUsers = async () => {
        const { data } = await axios.get(url);
        console.table(data);
        return data;
    }

    const { isLoading, isError, error, data } = useQuery('users', getUsers);
    
    if (isLoading) {
        return <div>Loading...</div>
    } else if (isError) {
        return <div>Error, { error.message }</div>
    }
    
    return (
        <div>
            <h2>UsersReactQuery</h2>
            {data && data.map((user,index) => (
                <div key={index}>{ user.name }</div>
            ))}
        </div>
    )
}
