import React from 'react'
import Navbar from '../components/navbar'
import { useQueries, useQuery } from 'react-query';
import axios from 'axios';
import Game from '../features/tictactoe/Game';
import TaskAppState from '../components/reducer/TaskAppState';
import TaskAppReducer from '../components/reducer/TaskAppReducer';
import Property from '../components/property';
import Properties from '../components/properties';
import Refs from '../components/Refs';
import CircleTimer from '../components/countdown/CircleTimer';
import TimerHook from '../components/countdown/TimerHook';
import MyTimer from '../components/countdown/MyTimer';
import Memo from '../components/memo/memo';
import Callback from '../components/callback/callback';
import Reducer from '../components/reducer2/reducer';
import Store from '../features/fakestoreapi/Store';

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
            <h6>react-202404</h6>
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
            {/* <hr />
            <Game />
            <TaskAppState />
            <TaskAppReducer />
            <hr />
            <h4>kyt</h4> */}
            {/* <Property /> */}
            {/* <Properties /> */}

            {/* <hr /> */}
            {/* <Refs /> */}
            {/* <hr /> */}
            {/* <CircleTimer /> */}
            {/* <br />
            <TimerHook /> */}
            {/* <br /> */}
            {/* <MyTimer /> */}
            {/* <hr />
            <Memo/>
            <hr />
            <Callback />
            <hr />
            <Reducer /> */}
            {/* <hr/> */}
            <Store />
        </div>
    )
}
