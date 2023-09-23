import React from "react";
import { useDispatch } from "react-redux";
// import { deleteUsers } from "../store/slices/UserSlice";
import { deleteUsers } from "../store/actions";

const DeleteAllUser = ({ name }) => {
  const dispatch = useDispatch()

  const deleteAllUsers = ()=>{
    dispatch(deleteUsers())
  }
  
  return (
    <div>
      <button
        type="button"
        class="mt-3 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={()=>{deleteAllUsers()}}
      >
        DeleteAllUser
      </button>
    </div>
  );
};

export default DeleteAllUser;
