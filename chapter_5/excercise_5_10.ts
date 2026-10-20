type User = {
    email: string;
    password: string;
}

type APIResponse = 
| [ "success", User[] ]
| [ "error", string]

async function fetchData(): Promise<APIResponse> {
    try{
        const response = await fetch("https://api.example.com/data")

        if(!response.ok) {
            return [
                "error",
                "An error ocurred",
            ];
        }
        
        const data = await response.json()
        return ["success", data];

    }  
    catch (error) {
        return ["error", "An error ocurred"]
    }
}