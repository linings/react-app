import getAllUsersData from '../../../utils/getAllUsersData';

export default async () => {
    let users = await getAllUsersData();
    return users;
}