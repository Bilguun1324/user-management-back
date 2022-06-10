import { addUser, getUser, getUsers } from './userResolver'

export default {
    Query: {
        getUsers,
        getUser
    },
    Mutation: {
        addUser,
    }
}