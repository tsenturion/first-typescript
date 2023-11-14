const getOlderUser = (user1: User, user2: User): User | null => {
    if (user1.age > user2.age)
        return user1;
    else if (user1.age < user2.age)
        return user2;
    return null;
}


type User = {
    name: string,
    age: number,
};
export type { User };
export default getOlderUser;