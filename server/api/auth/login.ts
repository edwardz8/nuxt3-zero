import { sanitizeUserForFrontend } from '~~/server/services/userService';
import bcrypt from 'bcrypt'
import { getUserByEmailWithPass } from '~/server/database/repositories/userRepository';
import { CompatibilityEvent, sendError } from "h3"
import { makeSession } from '~~/server/services/sessionService';

export default async (event: CompatibilityEvent) => {
    const body = await useBody(event)
    const email: string = body.email
    const password: string = body.password
    const user = await getUserByEmailWithPass(email)

    if (user === null) {
        return sendError(event, createError({ statusCode: 423, statusMessage: 'Wrong Email' }))
    }

    
    const isPasswordCorrect =    await bcrypt.compare(password, user.password)
    console.log(password, user, isPasswordCorrect)

    if (!isPasswordCorrect) {
       return sendError(event, createError({ statusCode: 423, statusMessage: 'Wrong password' }))
    }

    await makeSession(user, event)

    return sanitizeUserForFrontend(user)
}