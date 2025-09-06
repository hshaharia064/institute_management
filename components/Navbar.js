import Link from 'next/link'
import React from 'react'

const Navbar = () => {





  return (
    <div className='w-96 h-screen  z-50 fixed  nav-bg'>
        <div className='py-4 shadow-sm  shadow-gray-950'>
                <p className='text-2xl text-center  font-semibold'>Institute Management</p>
        </div>

        <div className=' w-full h-full px-6 py-10 flex flex-col  justify-start gap-5'>

                    <Link href={'/'} className='text-xl h-10 w-full rounded-xl flex items-center justify-center text-black bg-gray-100 hover:bg-gray-400'>Dashboard</Link>
                    <Link href={'/students'} className='text-xl h-10 w-full rounded-xl flex items-center justify-center text-black bg-gray-100 hover:bg-gray-400'>Students</Link>
                    <Link href={'/courses'} className='text-xl h-10 w-full rounded-xl flex items-center justify-center text-black bg-gray-100 hover:bg-gray-400'>Courses</Link>
                    <Link href={'/teachers'} className='text-xl h-10 w-full rounded-xl flex items-center justify-center text-black bg-gray-100 hover:bg-gray-400'>Teachers</Link>

        </div>
    </div>
  )
}

export default Navbar