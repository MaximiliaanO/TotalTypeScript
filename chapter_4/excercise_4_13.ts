type Person = {
    name: string,
    age: number
}

const parsedData: Person = JSON.parse('{"name": "Alice", "age": 30}')
