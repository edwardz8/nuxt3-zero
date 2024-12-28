// import { IUser } from '~/types/IUser';
import { getCookie } from 'h3'
import { getUserBySessionToken } from '~~/server/services/sessionService'

export default defineEventHandler(async (event) => {
    const authToken = getCookie(event, 'auth_token')
    const user = await getUserBySessionToken(authToken)
    return user
})