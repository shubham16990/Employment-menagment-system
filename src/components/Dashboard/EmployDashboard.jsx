import React from 'react'
import Header from '../Others/Header'
import TaskList from '../Others/TaskList'
import TaskListNumber from '../Others/TaskListNumber'

const EmployDashboard = () => {
    return (
        <div className='p-10 h-screen w-screen bg-[#1c1c1c]'>

            <Header />
            <TaskListNumber/>
            <TaskList />
        </div>
    )
}

export default EmployDashboard
