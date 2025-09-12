import { NextResponse } from "next/server";
import pool from "@/lib/db";


export async function DELETE(request, {params}){

    const {id} = params

    try{

        const [result] = await pool.execute(`DELETE FROM users WHERE id= ?`, [id])

        if(result.affectedRows ===0){
            return NextResponse.json(
                {message : 'Student not found'},
            {status : 404})
        }


        return NextResponse.json(
            {message : 'Student deleted successfully'},
            {status : 200}
        )

    }catch(error){
        console.error('Delete student error : ', error)

        if(error && error.errno ===1451){
           return NextResponse.json(
                {message : 'Can not delete karon ei table beleg table er loge relation a ase'},
                {status : 409}
            )
        }

    return NextResponse.json(
        {message : 'Could not delete student', error : String(error)},
        {status : 500}
    )
    
    }





}