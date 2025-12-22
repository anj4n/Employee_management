const employees = [
    {
      "id": 101,
      "email": "e@e.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Prepare monthly report",
          "taskDescription": "Compile the monthly performance report",
          "taskDate": "2025-01-05",
          "category": "Reporting"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Update client database",
          "taskDescription": "Add new client entries and update existing data",
          "taskDate": "2025-01-08",
          "category": "Data Entry"
        },
        {
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Team meeting",
          "taskDescription": "Attend weekly team sync meeting",
          "taskDate": "2025-01-10",
          "category": "Meeting"
        }
      ]
    },
    {
      "id": 102,
      "email": "employee2@example.com",
      "password": "emp2@123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Design login UI",
          "taskDescription": "Create a user-friendly login page design",
          "taskDate": "2025-01-06",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Fix navbar bugs",
          "taskDescription": "Resolve issues reported in the navbar",
          "taskDate": "2025-01-09",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Client feedback review",
          "taskDescription": "Analyze and summarize client feedback",
          "taskDate": "2025-01-11",
          "category": "Review"
        }
      ]
    },
    {
      "id": 103,
      "email": "employee3@example.com",
      "password": "emp3@123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskTitle": "API integration",
          "taskDescription": "Integrate new API endpoints for the system",
          "taskDate": "2025-01-07",
          "category": "Backend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Database backup",
          "taskDescription": "Perform full database backup and verification",
          "taskDate": "2025-01-10",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Performance testing",
          "taskDescription": "Test system performance under heavy load",
          "taskDate": "2025-01-12",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 104,
      "email": "employee4@example.com",
      "password": "emp4@123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Content writing",
          "taskDescription": "Write content for the company's blog",
          "taskDate": "2025-01-08",
          "category": "Content"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "SEO optimization",
          "taskDescription": "Optimize blog posts for search engines",
          "taskDate": "2025-01-11",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Publish blog post",
          "taskDescription": "Publish prepared content on website",
          "taskDate": "2025-01-13",
          "category": "Publishing"
        }
      ]
    },
    {
      "id": 105,
      "email": "employee5@example.com",
      "password": "emp5@123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Server maintenance",
          "taskDescription": "Perform regular server maintenance tasks",
          "taskDate": "2025-01-09",
          "category": "IT"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Security audit",
          "taskDescription": "Audit system security and generate report",
          "taskDate": "2025-01-12",
          "category": "Security"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Deploy new build",
          "taskDescription": "Deploy latest build to production",
          "taskDate": "2025-01-14",
          "category": "Deployment"
        }
      ]
    }
];


const admin =  [{
    "id": 501,
    "email": "admin.com",
    "password": "123"
}];




export const SetLocalStorage = ()=>{

     localStorage.setItem('employees', JSON.stringify(employees))
     localStorage.setItem('admin', JSON.stringify(admin))
     
}


export const GetLocalStorage=()=>{
    const employees =JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees , admin};

 
    
}






