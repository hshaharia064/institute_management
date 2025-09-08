

import DisplayData from '@/components/DisplayData'
import React from 'react'
import { studentField } from '@/config'
import DashCard from '@/components/DashCard'

const students = () => {
  return (
     <div className='p-10'>
                   <div className=' w-[75%] rounded-2xl ml-auto h-20 mb-20 flex items-center px-10 bg-gray-800'>
                           <p className='text-2xl font-semibold'>Students </p>
                   </div>

    
    
                <div className=' w-[75%] rounded-2xl ml-auto min-h-20  flex items-center justify-center py-10  px-10 bg-gray-800/50'>


                    <DisplayData title={'Enroll students'} fields={studentField} apiEndPoint={'api/students'}/>
         
                </div>

            <div className='w-[75%] mt-10 ml-auto' >

                <DashCard title={'Students : '} apiEndPoint={'/api/students'} header_1={'Name'} header_2={'Email'}/>  
            </div>






    </div>
  )
}

export default students