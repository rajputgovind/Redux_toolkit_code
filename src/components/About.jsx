import React from 'react';
import { useSelector } from 'react-redux';
import DeleteAllUser from './DeleteAllUser';
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';


const About = () => {
  // const number = useSelector((state)=>{
  //   return state.custome.num
  // })
  // console.log("jedf")
  const dispatch = useDispatch()

  const addNewUser = (payload)=>{
    dispatch(addUser(payload))
    // console.log(payload)
  }

  return (
    <center>

    <div className='container mx-auto'>
    <h3 class="text-3xl font-bold dark:text-white mt-5">List of User Details</h3>
    <button type="button" class="mt-4 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={()=>{addNewUser(fakeUserData())}}>Add New User</button>

    <ul className="mt-4">
    <DisplayUsers/>
    </ul>
    </div>
    <DeleteAllUser name="govind"/>
    </center>
  );
}

export default About;  


