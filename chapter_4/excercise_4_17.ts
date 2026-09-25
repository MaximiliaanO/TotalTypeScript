type User = {
    id: string;
    name: string;
}

const modifyUser = (user: User[], id: string, makeChange: (u: User) => User ) => {
    return user.map((u) => {
        if (u.id === id) {
            return makeChange(u)
        }

        return u;
    })
}