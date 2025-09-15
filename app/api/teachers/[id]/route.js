import pool from "@/lib/db";
import { NextResponse } from "next/server";



export async function DELETE(request, {params}){
     
    const {id} = params

    try{
            const [result] = await pool.execute(`DELETE FROM teachers WHERE id=?`, [id])
            if(result.affectedRows ===0){
                return NextResponse.json(
                    {message : 'Teacher not found'},
                    {status : 404}
                )
            }

            return NextResponse.json(
                {message : 'Teacher deleted successfully'},
                {status : 200}
            )


    }catch(error){
        console.error('Unable to delete teacher')
        if(error  && error.errno === 1453){
            return NextResponse.json(
                {message : 'can not delete teacher because teacher table is linked to another table'},
                {status : 409}
                
            )
        }

        return NextResponse.json(
            {message : 'Teacher was not deleted'},
            {status : 500}
        )



    }






}




export  async function PUT(request, {params}){
    const {id} = params
    
    try{
        const body = await request.json()
        const {name, email} = body 
        const [result] = await pool.execute('UPDATE teachers SET name=?, email=? WHERE id=?', [name, email, id])
        if(result.affectedRows ===0){
          return  NextResponse.json(
                {message : 'Teacher not found'},
                {status : 404}
            )
        }


        return NextResponse.json(
            {id, name, email},
            {status : 200}
        )

    }catch(err){
        console.log('error occured while updating the teacher')
       return NextResponse.json(
            {message : 'error occured updating teacher'},
            {status : 500}
        )


    }




}