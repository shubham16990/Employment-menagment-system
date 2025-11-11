import React from 'react'

const CreateTask = () => {
    return (
        <div className='mt-10 bg-[#1c1c1c] p-5 rounded-xl '>
            <form className='flex items-center justify-between flex-nowrap w-full'>
                <div className='w-1/2' >
                    <div className='mb-3 '>
                        <h3 className='text-gray-300 text-sm mt-0.5  '>Task Title</h3>
                        <input type="text" placeholder='Enter your task'
                            className='w-4/5 text-sm outline-none px-5 py-1 rounded-xl bg-transparent border-2 ' />
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-gray-300 text-sm mt-0.5'>Asign to</h3>
                        <input type="text" placeholder='Asign mention'
                            className='w-4/5 border-2 py-1 px-5 rounded-xl outline-none bg-transparent' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mt-0.5 '>Catogery</h3>
                        <input type="text" placeholder='Design task'
                            className='w-4/5 rounded-xl outline-none border-2 py-1 px-5 bg-transparent' />
                    </div>
                    <button className='w-2/5 outline-none text-xl bg-gray-400 rounded-xl mt-5 hover:bg-gray-200'>Add Task</button>
                </div>
                <div className='flex flex-col w-2/5 '>
                    <h3 className='text-xl text-gray-300 mt-0.5 '>Description</h3>
                    <textarea name="" id="" col="30" rows="10"
                        className='w-full h-44 rounded-xl mt-1 border py-2 px-4 outline-none bg-transparent '
                    ></textarea>
                </div>

            </form>
        </div>
    )
}

export default CreateTask