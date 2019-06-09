import {User} from './index';

export interface AuthPayload {
    user: User,
    token: string
}
