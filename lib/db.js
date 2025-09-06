import mysql2 from 'mysql2/promise'

const pool = mysql2.createPool({
    host : process.env.DB_HOST ,
    database : process.env.DB_NAME ,
    user : process.env.DB_USER ,
    password : process.env.DB_PASSWORD ,
    port : process.env.DB_PORT|| 3306,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0
})

export default pool
