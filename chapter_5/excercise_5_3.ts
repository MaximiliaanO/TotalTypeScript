function validateUsername(username: string | null): boolean {
    if (typeof username === "string") {return username.length > 5;}

    return false
}