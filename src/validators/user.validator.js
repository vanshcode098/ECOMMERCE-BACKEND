import {z} from "zod"


const registerUserSchema= z.object({
    name: z.string().trim().min(3,"Name must contain at least 3 characters"),
    email: z.string().trim().email("please enter valid email")
    .transform((value)=> value.toLowerCase()),

    password: z.string().min(8, "Password must contain at least 8 characters")
    .max(16, "Password cannot exceed 16 characters"),
});


export { registerUserSchema};