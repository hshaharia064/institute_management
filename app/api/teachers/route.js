import pool from "@/lib/db";
import { log } from "console";
import { NextResponse } from "next/server";


export async function GET(){
    try{

        const [rows] = await pool.execute('SELECT * FROM teachers')
        console.log('teachers data fetched successfully', rows.length);
        return NextResponse.json(rows, {status : 200})
        

    }catch(error){
        console.error('Error occured while fetching data of teachers')
        return NextResponse.json(
            {message : 'Error occured while fetching data of teachers'},
            {status : 500}
        )

    }
}




export async function POST(request){
    const body = await request.json()
    const {name, email} = body

    try{
        const [result] = await pool.query('INSERT INTO teachers (name, email) VALUES (?, ?)', [name, email])
        console.log('data submitter successfully with name : ', name , 'email : ', email);
        return NextResponse.json(
            {message : 'Teacher added successfully'},
            {status : 200}
        )
        

    }catch(error){
                return NextResponse.json(
                    {message : 'Unable to add teacher', error},
                    {status : 500}
                )
    }
}