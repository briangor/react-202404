import { useQuery } from "react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function UsersReactQuery() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const getUsers = async () => {
        const { data } = await axios.get(url);
        console.table(data);
        return data;
    }

    // custom error handling function
    const handleError = (error, query) => {
        // do anything with the error here e.g. conditionally render modals with error.message as 
        // body to imprve the app's ux
        toast.error(`Something went wrong: ${error.message}`);
        console.log(`An error occured, ${ error.message }`);
        return <p>Error ...</p>
    }

    const { isLoading, isError, error, data } = useQuery('users', getUsers);


    /* const { isLoading, isError, error, data } = useQuery('users', getUsers, { 
        //useErrorBoundary: true
        onError: handleError,
        useErrorBoundary: error => error.response?.status >= 400
    }); */
    
    if (isLoading) {
        return <div>Loading...</div>
    } else if (isError) {
        return <div>Error, { error.message }</div>
    }
    
    return (
        <div>
            <p><Link to={'/'}>home</Link></p>
            <h2> <Link to={'/users2'}>UsersReactQuery</Link></h2>
            {data && data.map((user,index) => (
                <div key={index}>{ user.name }</div>
            ))}
        </div>
    )
}
