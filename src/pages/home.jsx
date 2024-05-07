import React from 'react'
import Navbar from '../components/navbar'
import { useQueries, useQuery } from 'react-query';
import axios from 'axios';
import Game from '../features/tictactoe/Game';
import TaskAppState from '../components/reducer/TaskAppState';
import TaskAppReducer from '../components/reducer/TaskAppReducer';

export default function Home() {
    const url = 'https://jsonplaceholder.typicode.com';

    const getUsers = async () => {
        const { data } = await axios.get(`${url}/users`);
        //console.log(data); 
        return data;
    }
    const getAlbums = async () => {
        const { data } = await axios.get(`${url}/albums`);
        //console.log(data);
        return data;
    }
    // const res = useQuery('users', getUsers);
    // console.log(res);
    
    //const { isLoading, isError, error, data } = useQuery('users', getUsers);
    //const { isLoading, isError, error, data } = useQuery('albums', getAlbums);
    // const { isLoading, isError, error, data } = useQueries();

    const results = useQueries([
        {
          queryKey: ["user"],
          queryFn: () => getUsers()
        },
        {
          queryKey: ["albums"],
          queryFn: () => getAlbums()
        },
      ]);

     // console.log(results);
    //  const {users, albums } = results;
    //  console.log(users);


    return (
        <div>
            {/* <Navbar /> */}
            {/* <p> Users </p> */}
            {/* {data && data.map((user,index) => (
                <div key={index}>{ user.name }</div>
            ))} */}
            {/* {results[0] && results[0].data.map((user,index) => (
                <div key={index}>{ user.name }</div>
            ))} */}

            {/* <p> Albums</p> */}
            {/* {results[1] && results[1]?.data?.map((album,index) => (
                <div key={index}>{ album.title }</div>
            ))} */}
            <hr />
            <Game />
            <TaskAppState />
            <TaskAppReducer />
        </div>
    )
}
