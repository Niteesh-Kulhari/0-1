import { Client } from 'pg';

// Async function to fetch user data from the database given an email

    const client = new Client({
        connectionString: "postgresql://DB_1_owner:lBkQE84RndKG@ep-ancient-grass-a54rdod8.us-east-2.aws.neon.tech/DB_1?sslmode=require"
    });

    

    async function createUsersTable(){
        await client.connect();
        const result = await client.query(
            `CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `)
    }

    //createUsersTable();


    async function insertUser(){
        try {
            await client.connect();
            const insertQuery = "INSERT INTO users(username,email,password) VALUES ('Niteesh', 'nkulhari96@gmail.com','Qwerty@123');";
            const res = await client.query(insertQuery);
            console.log('Insertion completed', res);
        } catch (error) {
            console.log('Insertion Failed', error);
        }finally{
            await client.end();
        }
    }

    //insertUser();

    async function findUser(email: string){
        await client.connect();
        const findQuery = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const res = await client.query(findQuery,values);
        if(res.rows.length > 0){
            console.log('Found the user ', res.rows[0]);
            return res.rows[0];
        }else{
            console.log('User not found with the given email id');
            return null;
        }
    }

    findUser('nkulhari96@gmail.com');