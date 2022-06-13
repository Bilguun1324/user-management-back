import { addUser, getUser, getUsers, updateUser } from './userResolver'
import { addGroup, inviteUser, getGroups, getGroup } from './groupResolver'

export default {
    Query: {
        getUsers,
        getUser,
        getGroup,
        getGroups
    },
    Mutation: {
        addUser,
        updateUser,
        addGroup,
        inviteUser
    }
}