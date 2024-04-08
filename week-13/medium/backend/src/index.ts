import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign, verify} from "hono/jwt"



const app = new Hono<{
  Bindings:{
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})




app.post('/api/v1/signup', async (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()

  const user = await prisma.user.create({
    data:{
      email: body.email,
      password: body.password,
    },
  })

  const token = await sign({id:user.id}, c.env.JWT_SECRET)

  return c.json({
    jwt: token
  });
})




app.post('/api/v1/signin', async (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where:{
      email: body.email,
    }
  })

  if(!user){
    c.status(403);
    return c.json({error: "user not found"})
  }

  const token = await sign({id: user.id}, c.env.JWT_SECRET)

  c.status(200)
  return c.json({token: token})
})














app.post('/api/v1/blog', (c)=>{
  return c.text("Hello from blog post route");
})

app.put('/api/v1/blog', (c)=>{
  return c.text("Hello from blog put");
})

app.get('/api/v1/blog/:id', (c)=>{
  return c.text("Hello from blog get");
})

export default app


// postgresql://neondb_owner:3qPvrxC1pXyH@ep-noisy-bar-a5mxo56e.us-east-2.aws.neon.tech/neondb?sslmode=require
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYTYzMjVkN2YtM2M4Ny00OWJmLWJhZjMtYWY5MzI1MThjMThkIiwidGVuYW50X2lkIjoiZGM4MGU2OWQ2ZTVhODIzZGVjN2NiOGEzZDZmNTA1ZTFiZmQ3OWY0MmM3ZmJjOTQ2NmM0NzVmYzg0MzI0MDhmNiIsImludGVybmFsX3NlY3JldCI6IjI0Njc5NmExLTE1ZTgtNDJmNi1iZmNhLWY2N2MzZmI2ZTBkZCJ9.ay0ymTFzIuefomQQZNzYGY18Ur_2u4vdWWTVwC1Oaus"
