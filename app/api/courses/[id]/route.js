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




export async function PUT(request, {params}){
    const {id} = params

    try{
        const {name, description, teacher_id} = await request.json()
        const [result] = await pool.execute('UPDATE courses SET id=? name=?, description=?, teacher_id=? WHERE id=?', [id, name, description, teacher_id, id])

        if(result.affectedRows === 0){
            return NextResponse.json(
                {message : 'No courses was found'},
                {status : 404}
            )
        }


        return NextResponse.json(
            {id, name, description, teacher_id},
            {status : 200}
        )






    }catch(err){
        console.log('something went wrong while updating courses')
                    if(  err && err.errno === 1453){
                        return NextResponse.json(
                            {message : 'courses table is connected to another table'},
                            {status : 500}
                        )
                    }


        return NextResponse.json(
            {message : 'Courses was not updated'},
            {status : 500}
        )




    }
}