type BaseEntity = {
    id: string;
    createdAt: Date;
}


type User = {
    name: string;
    email: string;
} & BaseEntity

type Product = {
    name: string;
    price: number;
} & BaseEntity

