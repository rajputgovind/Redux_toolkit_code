import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { decreament, increament ,increamentBY25} from "../store/slices/countSlice";
const Count = () => {
    // const dispatch = useDispatch()
    // const num = useSelector((state)=>{
    //     return state.custome.num
    // })
    // console.log("num",num)
    // console.log(useSelector,"useSelector")
    // const [count,setCount] =useState(0)

    const dispatch =useDispatch()
  const count = useSelector((state)=>{
    return state.counts
  })
    const increamentBy1 = ()=>{
        // setCount(count+1)
        // dispatch({
        //     type:"increament"
        // })
        dispatch(increament())
    }
    const decreamentBy1 = ()=>{
        // setCount(count-1)
        // case 6 packprogrammer code
        // dispatch({
        //     type:"decreament"
        // })
        dispatch(decreament())
    }
    const increaseBy25 = ()=>{
        // setCount(count+25)
// case 6 packprogrammer code
      // dispatch({
      //   type:"increaseBy25",
      //   payload:25
      dispatch(increamentBY25(25))
      // })
        
    }
  return (
    <div className="container mx-auto">
      <h3 class="text-3xl font-bold dark:text-white">Count</h3>

      <div
        class="mt-3 flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
        role="alert"
      >
        <svg
          class="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Info alert!</span> Change a few things up
          and try submitting again.
        </div>
      </div>

      <h3 class="text-3xl font-bold dark:text-white">{count}</h3>

      <div className="mt-5">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={increamentBy1}
        >
          Increase 1
        </button>
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={decreamentBy1}
        >
          Decrease 1
        </button>
        <button
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={increaseBy25}
        >
          Increase 25
        </button>
      </div>
    </div>
  );
};

export default Count;
