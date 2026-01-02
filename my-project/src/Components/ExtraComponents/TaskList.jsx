import React from "react";
import AcceptTask from "../Tasks/AcceptTask";
import CompletedTask from "../Tasks/CompletedTask";
import FailedTask from "../Tasks/FailedTask";
import NewTask from "../Tasks/NewTask";

const TaskList = ({data}) => {
  console.log({data})
  return (
    <div
     
      id="tasklist"
      className="   mt-10 mx-10  flex justify-start gap-5 items-center  overflow-x-auto flex-nowrap py-5 ">

      {data.tasks.map((e)=>{
        if(e.active){
          return <AcceptTask/>
        }
         if (e.completed){
          return <CompletedTask/>
        }
         if (e.failed){
          return <FailedTask/>
        }
        if(e.NewTask){
          return<NewTask/>

        }
      
      
      })}


    </div>
  );
};

export default TaskList;
