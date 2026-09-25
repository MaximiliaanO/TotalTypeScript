const concatName = (first: string, last: string = "Pocock") => {
    if (!last) {
        return first;
    }

    return `${first} ${last}`
}

const result = concatName("John", "Doe")

const result2 = concatName("John")

