function getUsername(username: string | null) {
    if (username !== null) {
        return `User: ${username}`
    };
    
    return 'Guest';
}

const result = getUsername('Alice')
const result2 = getUsername(null)