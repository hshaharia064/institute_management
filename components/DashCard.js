'use client'
import React, { useEffect, useState } from 'react'




const DashCard = ({title, apiEndPoint, header_1, header_2}) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)


  useEffect(()=>{

    async function handleFetch(){
      setError(null)
      setLoading(true)

        try{

          const response = await fetch(apiEndPoint)
          if(!response.ok){
            throw new Error(`Failed to fetch ${response.text}`, response.status)
          }


          const responseData = await response.json()
          
          setData(responseData)
          console.log(data);
          

          

        }catch(error){
          console.error('error occured while running handleFetch', error)
          setError(error.message)

        }finally{
          setLoading(false)

        }





    }

    handleFetch()




  },[apiEndPoint])



  return (

    <div className='h-72 border border-gray-400/30 rounded-2xl bg-gray-800/50 p-5 overflow-hidden'>
                <p className='text-xl font-semibold mb-5'>{title}</p>

                <div className='h-52 p-5 w-full overflow-y-scroll border bg-gray-950 border-gray-700/40 rounded-2xl'>
                {loading ? (
                  <span className='animate-pulse text-3xl'>Loading.....</span>
                ) : error ? (
                  <div className='text-red-500/50'>Error : {error}</div>
                ) : data.length == 0 ?  (
                  <p>No data found</p>
                ) : (
               <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <p className='mb-5 font-bold'>{header_1}</p>
                  <p className='mb-5 font-bold'>{header_2}</p>
                </div>

                  {
                    
                    data.map((d)=>(
                      <div key={d.id} className='flex justify-between bg-gray-500/20 px-3 rounded-xl mb-5 py-3 '>
                        <div className='w-[30%] overflow-ellipsis gap-5 flex flex-col'>
                            <p >{d.id}. {d.name}</p>

                        </div>

                        <div className='text-start w-[65%] gap-5 flex flex-col'>

                      <p>{d.email}</p>
                      <p className='-mt-4' >{d.description}</p>
                        </div>
                      {/* <p>{d.email}</p> */} 
                      </div>
                    ))
                  }
                  </div>
                 
                  )}
                </div>
    </div>
  )
}

export default DashCard