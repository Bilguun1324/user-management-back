import { Group } from "../schemas";

const addGroup = async (_: any, params: any) => {
    const group = new Group(params);

    try {
        await group.save();
        return group;
    } catch (error) {
        return error;
    }
};

const getGroup = async (_: any, { _id }: any) => {
    const group = await Group.findOne({ _id: _id })
    return group;
};

const getGroups = async (_: any, params: any) => {
    const groups = await Group.find(params);
    return groups
};

const inviteUser = async (_: any, { _id, uid, permission }: any) => {
    const data = {
        uid: uid,
        permission: permission
    }

    const updateDocument = {
        $push: { "members": data }
    };

    await Group.updateOne({ _id: _id }, updateDocument)
}

export { addGroup, getGroup, getGroups, inviteUser };
