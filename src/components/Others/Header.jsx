import React from 'react'

const Header = () => {
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium '>Hello <br /><spana className='text-3xl font-bold '>Shubham kumar</spana></h1>
            <button className='bg-blue-500 px-4 py-2 border-none rounded-full hover:bg-blue-300 cursor-pointer
            '>Log Out</button>
        </div>

    )
}

export default Header