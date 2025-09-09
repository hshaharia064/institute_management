import pool from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(){
    try{
    const [rows] = await pool.execute('SELECT * FROM courses')
    console.log('courses data fetched', rows.length);
    return NextResponse.json(rows, {status : 200})
    

}catch(error){

    console.error('Error occured while fetching course data')
    return NextResponse.json(
        {message : 'Error occured while fetching course data'},
        {status : 500}
    )

    }
}




export async function POST(request){
    try{
        const body = await request.json()
        const {name, description} = body

        if(name.length ===0 || description.length ===0){
            return NextResponse.json(
                {message : 'Fields can not be empty'},
                {status : 404}
            )
        }

        const [result] = await pool.query('INSERT INTO courses (name, description) VALUES (?, ?)', [name, description])

        return NextResponse.json(
            {message : 'Course added successfully'},
            {status : 200}
        )


        }catch(error){

        return NextResponse.json(
            {message : 'Unable to add course'},
            {status : 500}
        )

    }

    }
