import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='max-w-[1110px] m-auto p-20 h-1100'>
        <h1 className='text-2xl font-bold text-center p-4'>Login</h1>
        <form className='max-w-[400px] m-auto'>
            <input className='rounded border shadow-lg p-3 w-full my-2' type="email" placeholder='Email'/>
            <input className='rounded border shadow-lg p-3 w-full my-2' type="password" placeholder='Password' />
        <h5 className="text-black-900 p-3">
				Dont have an account: <span className="text-blue-700"><Link href='/'>Apply</Link></span>
			  </h5>
            <button className='border shadow-lg p-3 w-full mt-2 bg-blue-800 text-white rounded'>Login</button>
            <h5 className='text-blue-600 p-3'><Link href='/'>forgot password</Link></h5>
            <h5 className='text-center p-3'>Login with</h5>
        <div className='grid grid-cols-3 text-center gap-1 p-4'>
          <h1 className='bg-yellow-400 rounded'>ALogo</h1>
          <h1 className='bg-red-400 rounded'>GLogo</h1>
          <h1 className='bg-blue-400 rounded'>TLogo</h1>
        </div>
        </form>
        
    </div>
  )
}

export default Login