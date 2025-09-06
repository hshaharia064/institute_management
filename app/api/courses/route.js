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