import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app


// postgresql://neondb_owner:3qPvrxC1pXyH@ep-noisy-bar-a5mxo56e.us-east-2.aws.neon.tech/neondb?sslmode=require
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYTYzMjVkN2YtM2M4Ny00OWJmLWJhZjMtYWY5MzI1MThjMThkIiwidGVuYW50X2lkIjoiZGM4MGU2OWQ2ZTVhODIzZGVjN2NiOGEzZDZmNTA1ZTFiZmQ3OWY0MmM3ZmJjOTQ2NmM0NzVmYzg0MzI0MDhmNiIsImludGVybmFsX3NlY3JldCI6IjI0Njc5NmExLTE1ZTgtNDJmNi1iZmNhLWY2N2MzZmI2ZTBkZCJ9.ay0ymTFzIuefomQQZNzYGY18Ur_2u4vdWWTVwC1Oaus"
