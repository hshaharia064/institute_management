
import { courseField } from '@/config'
import DisplayData from '@/components/DisplayData'
import React from 'react'

const courses = () => {

  return (
    <div className='p-10'>
      <div className=' w-[75%] rounded-2xl ml-auto h-20 flex items-center px-10 mb-10 bg-gray-800'>
          <p className='text-2xl font-semibold'>Courses :</p>
      </div>


      <div className=' w-[75%] rounded-2xl ml-auto min-h-20  flex items-center justify-center py-10  px-10 bg-gray-800/50'>

      <DisplayData title={'Enroll course'}  apiEndPoint={'api/courses'} fields={courseField}/>
      </div>

    </div>
  )
}

export default courses