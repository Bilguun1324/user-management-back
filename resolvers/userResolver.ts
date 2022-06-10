import { User } from "../schemas";

const addUser = async (_: any, params: any) => {
  const user = new User(params);

  try {
    await user.save();
    return user;
  } catch (error) {
    return error;
  }
};
const getUser = async (_: any, { _id }: any) => {
  const user = await User.findOne({ _id: _id });
  return user;
};

const getUsers = async (_: any, params: any) => {
  const users = await User.find(params);
  return users
};

// const updateUser = async(_: any, { _id, params } : any) => {
//   try {
//     const user = await User.updateOne({ 
      
//     }, {
//       $set: params
//     })
//     return user ? true : false
//   } catch(err) {
//     return false
//   }
// }
export { addUser, getUser, getUsers };
