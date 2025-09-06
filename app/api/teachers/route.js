import pool from "@/lib/db";
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