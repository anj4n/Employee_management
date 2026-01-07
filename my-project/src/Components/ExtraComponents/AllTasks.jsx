import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTasks = () => {
  const authData =  useContext(AuthContext)
  return (
    <div className='bg-neutral-950 m-10  pt-5 pb-3   '>
      <div className='flex justify-between bg-amber-400 mx-5 mb-5 text-black font-bold p-6 '>
        <h1 className='  w-1/5'>Employee Name</h1>
        <h1 className='  w-1/5 '>New Task</h1>
        <h1 className='  w-1/5'> Accepted Task</h1>
        <h1 className='  w-1/5'>Completed Task</h1>
        <h1 className='  w-1/5'>Failed</h1>


      </div>
      {authData.employees.map((elem,index)=>{

          return <div key={index} className='bg-gray-900 flex justify-between p-6 rounded-2xl mb-3 mx-5   '>
            <h2 className="w-1/5 text-xl" key={index}>{elem.firstName}</h2>
            <h2 className="w-1/5">{elem.taskCounts.active}</h2>
            <h2 className="w-1/5">{elem.taskCounts.active}</h2>
            <h2 className="w-1/5">{elem.taskCounts.active}</h2>
            <h2 className="w-1/5">{elem.taskCounts.active}</h2>


        </div>  


      })}
 
    </div>
  )
}

export default AllTasks