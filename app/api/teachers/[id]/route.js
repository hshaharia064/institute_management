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