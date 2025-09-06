import { NextResponse } from "next/server";
import pool from "@/lib/db";




export async function GET(){
    try{

        const [rows] = await pool.execute('SELECT * FROM users')

        console.log('data fetched from the database', rows.length)
        return NextResponse.json(rows, {status : 200})

    }catch(error){
        console.error('db fetch error', error);
        
      return  NextResponse.json(
            {message : 'Failed to fetch data in server side', error},
            {status : 500}
        )

    }
}


