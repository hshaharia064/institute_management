import pool from "@/lib/db";
import { NextResponse } from "next/server";


export async function DELETE(request, {params}){
    const {id} = params

    try{
       const [result] = await pool.execute('DELETE FROM courses WHERE id=?', [id])
        
       if(result.affectedRows === 0){
        return NextResponse.json(
            {message : 'The course was not found'},
            {status : 404}
        )
       }

       return NextResponse.json(
        {message : 'The course was deleted successfully'},
        {status : 200}
       )



    }catch(error){
        console.error('Unable to delete the course')

        if(error && error.errno === 1453){
            return NextResponse.json(
                {message : 'This courses table is linked with another table'},
                {status : 409}
            )
        }

        return NextResponse.json(
            {message : 'Unable to delete the course'},
            {status : 500}
        )


    }
}