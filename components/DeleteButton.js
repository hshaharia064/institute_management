'use client'

import React, { Children, useState } from 'react'

const DeleteButton = ({DeleteApi, id, onSuccess, Children}) => {

const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)


const handleDelete = async()=>{

    const ok = confirm('Do you want to delete')
    if(!ok){
        return

    }

    setIsLoading(true)
    setError(null)



    try{


        const response = await fetch(DeleteApi,{
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            }

        })
        let body = null
            try{
                body = await response.json()

            }catch(_){

            }

            if(!response.ok){
                throw new Error((body, body?.message) || `Failed to delete, status : ${response.status}`)
            }


            if(onSuccess) onSuccess(id,body)

    }catch(error){

        console.error('Error occured while deleting : ', error)
        setError(error.message || 'Deletion failed')




    }finally{
        setIsLoading(false)
    }
}










  return (
    <div className='inline-block'>
        
        <button onClick={handleDelete}
        disabled={isLoading}
         className="px-3 py-1 rounded bg-red-600/30  text-red-500 disabled:opacity-50">


                                        {isLoading ? 'Deleting...' : (Children || 'Delete')}
          

        </button>

        
    </div>
  )
}

export default DeleteButton