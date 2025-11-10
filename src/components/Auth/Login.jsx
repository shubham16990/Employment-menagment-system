import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)

        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <div className='border-2 border-blue-500 p-20 rounded-xl '>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col justify-center items-center  '>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className=' text-white border-2 border-blue-500 rounded-full outline-none bg-transparent py-3 px-4 text-xl mb-5 placeholder:text-white  ' type="email" placeholder='Enter Email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='text-white border-2 border-blue-500 rounded-full outline-none bg-transparent py-3 px-5 text-xl placeholder:text-white ' type="password" placeholder='Enter Password' />
                    <button className=' bg-blue-500 rounded-full outline-none py-2 px-9 mt-5'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login