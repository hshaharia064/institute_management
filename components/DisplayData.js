'use client'

import React, { useEffect, useState } from 'react'

const DisplayData = ({title, fields, apiEndPoint}) => {

    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)


    const handleChange = (e)=>{
      setFormData({...formData, [e.target.name] : e.target.value})
      
    }


    const handleSubmit = async (e)=>{
      e.preventDefault()
      setLoading(true)
      setError(null)
      setFormData({})
      setSuccess(null)

      console.log(formData, 'this is form data');

      try{

        const response = await fetch(apiEndPoint,{
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(formData)
        })

        if(!response.ok){
          throw new Error('Failed to add data')
        }

        const result = 'Result of post req from displaydata :'

        console.log('Post request result : ', result);

        setSuccess('Data added successfully')
        setFormData({})
        
        
        

      }catch(error){
        console.error(error.message, error.status)



      }finally{

        setLoading(false)

      }
    }


    
    
 

  return (
    <div className='min-w-[70%]   rounded-2xl px-5 py-5'>
          <div className='text-center'>
                  <p className='text-2xl font-semibold'>{title}</p>
                  <div>
                          <form onSubmit={handleSubmit}>
                                  {fields.map((field)=>(

                                            <div key={field.name} className='pt-5'>

                                                    <label className=' mr-4'>{field.label}</label>
                                                    
                                                    {field.type === 'textarea' ? (
                                                      <textarea 
                                                                name={field.name} 
                                                                value={formData[field.name] || ''}
                                                                onChange={handleChange}
                                                                className='p-2 rounded w-96 outline-0 bg-gray-700 mb-5 border border-gray-600'></textarea>
                                                    ) : 
                                                    // field.type == 'text' || 'number' || 'email' ? 
                                                    (
                                                      <input type={field.type}
                                                              name={field.name}
                                                              value={formData[field.name] || ''}
                                                              onChange={handleChange}
                                                              className='p-2 rounded w-96 outline-0 bg-gray-700 mb-5 border border-gray-600' />
                                                    )  }
                                            </div>

                                  ))}

                                  <button type='submit'
                                          disabled={loading}
                                          className='px-6 w-60 py-2 rounded text-amber-500 bg-amber-600/30 hover:bg-amber-500/70'>

                                            {loading ? 'Submitting' : 'Submit'}

                                  </button>
                                            {error && 
                                                  <p>{error}</p>
                                            }
                                            {success && 
                                                      <p>{success}</p>
                                                      }



                          </form>
                  </div>
          </div>
    </div>
  )     
}

export default DisplayData