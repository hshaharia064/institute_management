

import { teacherField } from '@/config'
import DashCard from '@/components/DashCard'
import DisplayData from '@/components/DisplayData'
import React from 'react'

const teachers = () => {
  return (
     <div className='p-10 '>
      <div className=' w-[75%] rounded-2xl ml-auto h-20 flex items-center px-10 mb-10 bg-gray-800'>
          <p className='text-2xl font-semibold'>Teachers </p>
      </div>


      <div className='border border-gray-400/30 w-[75%] rounded-2xl ml-auto min-h-20  flex items-center justify-center py-10  px-10 bg-gray-800/50'>

      <DisplayData title={'Add teacher'}  apiEndPoint={'api/teachers'} fields={teacherField}/>
      </div>

      <div className='w-[75%] mt-10 ml-auto'>

       <DashCard title={'Teachers : '} apiEndPoint={'/api/teachers'} header_1={'Name'} header_2={'Email'} />
      </div>

    </div>
  )
}

export default teachers