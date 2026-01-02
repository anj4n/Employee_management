import React from 'react'

const FailedTask = () => {
  return (
              <div className="bg-gray-900 h-full w-[400px] flex flex-col shrink-0 rounded-3xl p-5  items-start ">
        <div className="flex justify-between items-center w-full m-3">
          <h2 className="bg-red-600 text-xl w-20 rounded-xl flex justify-center items-center ">
            High
          </h2>
          <h3 className="text-xl ">18 december 2025</h3>
        </div>

        <h2 className="font-semibold text-3xl mt-5">Complete the project</h2>
        <p className="mt-5 text-sm wrap-break-word ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className='mt-2'>
            <button className='bg-red-400 m-5 rounded-2xl w-full'>mark as failed</button>
        </div>
      </div>

  )
}

export default FailedTask