import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import {decode, sign, verify} from "hono/jwt"
import { signunInput, signinInput } from '@niteesh96/medium-common-updated'

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string
    }
}>()

userRouter.post('/signup', async (c)=>{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json()

    const{ success } = signunInput.safeParse(body);
    //console.log(success)
    if(!success){
      c.status(411);
      return c.json({
        message: "Invalid Inputs"
      })
    }
    console.log(body)
    try {
      const user = await prisma.user.create({
        data:{
          email: body.username,
          password: body.password,
        },
      })
      console.log(user)
      const token = await sign({id:user.id}, c.env.JWT_SECRET)
      
      return c.json({
        jwt: token
      });
    } catch (error) {
      c.status(411);
      return c.text("Invalid");
    }
  })
  
userRouter.post('/signin', async (c)=>{
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    
    const { success } = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Invalid inputs"
      })
    }
    const user = await prisma.user.findUnique({
      where:{
        email: body.username,
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
  