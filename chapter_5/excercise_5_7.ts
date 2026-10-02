type TestObject = {
    data: {
        id: number
    }
}

const parseValue = (value: unknown) => {
    if (
        typeof value === "object" &&
        value && 
        "data" in value &&
        typeof value.data === "object" &&
        value.data !== null &&
        "id" in value.data &&
        value.data.id === "string"
    ) {
        return value.data.id
    }

    throw new Error("Parsing Error!")
}