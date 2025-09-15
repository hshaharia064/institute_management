
'use client'
import React, { useState } from 'react'

const EditButton = ({editApi, id, initialData, onSuccess}) => {

const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)
const [formData, setFormData] = useState(initialData || {})
const [isOpen, setIsOpen] = useState(false)


const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})}


const handleSubmit = async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    setError(null)


    try{
        
        const response = await fetch(editApi,{
            method : 'PUT',
            headers :{
                'Content-Type' : 'application/json' 
            },
            body : JSON.stringify(formData)

        })

        const body = await response.json()

        if(!response.ok){
            throw new Error( body.message || 'Failed to update data' )
        }
            
        if(onSuccess) onSuccess(id, body)


            setIsOpen(false)



    }catch(err){
        setError(err.message)
        console.error('error occured while updating the info in client side')

    }finally{
        setIsLoading(false)
    }
}






  return (
    <div>

            <button  className="px-3 py-1 rounded bg-cyan-500/40 text-cyan-500 disabled:opacity-50"
                    onClick={()=>setIsOpen(true)}>Edit</button>


            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className='bg-gray-800 p-6 rounded-xl w-96'>
                            <h2 className="text-xl font-semibold mb-4">Edit Details</h2>

                            <form onSubmit={handleSubmit}>
                                        {Object.keys(initialData).map((key)=>(

                                                <div key={key}>
                                                            <label className='block '>{key}</label>
                                                            <input type="text"
                                                                    name={key}
                                                                    value={formData[key] || ''}
                                                                    onChange={handleChange}
                                                                    className="w-full p-2 rounded bg-gray-700 mb-4 border border-gray-600" />
                                                </div>
                                        ))}

                            {error && (
                                <p>Error occured</p>
                            )}


                            <div className='flex mb-2 gap-3 mt-3'>

                                <button type='submit'
                                        disabled={isLoading}
                                        className='px-4 py-2 cursor-pointer rounded-2xl bg-amber-600/30 text-amber-500'>
                                            {isLoading ? 'Submitting...' : 'Submit'}

                                </button>

                                <button type='button'
                                        onClick={()=>setIsOpen(false)}
                                        className='px-4  cursor-pointer py-2 rounded-2xl bg-gray-200/80 text-black'>
                                            Cancel

                                </button>

                            </div>




                            </form>

                    </div>

            </div>
            )}
    
    
    
    </div>
  )
}

export default EditButton