import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/UserSlice';
const DisplayUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector((state)=>{
        return state.users
    })

    const delteUser = (payload)=>{
    //    dispatch(removeUser(payload))
    dispatch(removeUser(payload))
    }
  return (
    <>
        {
            users?.map((user,index)=>{
                return(
                    <>
                        <ul key={index}>
                            <li>{user} <span style={{cursor:"pointer"}} onClick={()=>{delteUser(index)}}> <MdOutlineDeleteForever/></span></li>
                        </ul>
                       
                    </>
                )
            })
        }
    </>
  )
}

export default DisplayUsers