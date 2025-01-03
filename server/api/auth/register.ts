import {CompatibilityEvent, sendError, readBody} from 'h3';
import bcrypt from 'bcrypt';
import {IUser} from '~/types/IUser';
import {validateUser} from '~/server/services/userService';
import {createUser} from '~/server/database/repositories/userRepository';
import {makeSession} from '~~/server/services/sessionService';
import {RegistrationRequest} from '~~/types/IRegistration';

export default async (event: CompatibilityEvent) => {
    // Read the request body
    const body = await readBody(event);
    const data = body.data as RegistrationRequest;

    // Validate user input
    const validation = await validateUser(data);

    if (validation.hasErrors === true) {
        const errors = JSON.stringify(Object.fromEntries(validation.errors));
        return sendError(event, createError({statusCode: 422, data: errors}));
    }

    // Encrypt the password
    const encryptedPassword: string = await bcrypt.hash(data.password, 10);

    // Create user data object
    const userData: IUser = {
        username: data.username,
        name: data.name,
        email: data.email,
        loginType: 'email',
        password: encryptedPassword,
    };

    // Save the user to the database
    const user = await createUser(userData);

    // Create a session for the user
    return await makeSession(user, event);
};
