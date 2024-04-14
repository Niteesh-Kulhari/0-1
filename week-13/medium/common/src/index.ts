import z from "zod";

export const signunInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
})

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})



export type SignupInput = z.infer<typeof signunInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlog = z.infer<typeof createBlogInput>
export type UpdateBlog = z.infer<typeof updateBlogInput>