import {Client} from "pg"

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
})

async function createUsersTable() {
    await client.connect()
    const res = await client.query(`
        CREATE TABLE users2(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)

    console.log(res)
}

//createUsersTable();


async function insertUsersData(username:string, password:string, email:string) {
    await client.connect()
    const res = await client.query(
        `INSERT INTO users2 (username, password, email)
        Values ($1, $2, $3)
        `, [username, password, email])
}

insertUsersData("Niteesh", "password123","nkulhari96@gmail.com");