import { z } from 'zod';
const nameRegex = /^[A-Za-z]+$/;
const numberRegex = /^[1-9]+$/;
const nameRegexMsz = 'Name should be only alphabet and no spaces';
export const schema = z.object({
    firstName: z.string().min(2).regex(nameRegex, nameRegexMsz),
    lastName: z.string().min(2).regex(nameRegex, nameRegexMsz),
    email: z.string().trim().email(),
    password: z.string().trim().min(6, 'Password must be 6 character'),
    confirmPassword: z.string().trim(),
    age: z.string().regex(numberRegex, 'Age should be greater than 0'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});

export type FormFields = z.infer<typeof schema>;
