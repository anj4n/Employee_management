import React from 'react'

const FailedTask = ({data}) => {
  return (
          <div className="bg-gray-900 h-full w-[400px] flex flex-col shrink-0 rounded-3xl p-5  items-start ">
        <div className="flex justify-between items-center w-full m-3">
          <h2 className="bg-blue-600 text-xl w-35  rounded-xl flex justify-center items-center ">
                {data.category}
          </h2>
          <h3 className="text-xl bg-amber-600 rounded-2xl p-1 ">{data.taskDate}</h3>
        </div>

        <h2 className="font-semibold text-3xl mt-5">{data.taskTitle}</h2>
        <p className="mt-5 text-sm wrap-break-word ">
         {data.taskDescription}
        </p>
        <div className='mt-10 w-full '>
            <button className='bg-red-600  rounded-2xl p-2 w-full mr-10 '>Failed</button>
        </div>
      </div>


  )
}

export default FailedTask