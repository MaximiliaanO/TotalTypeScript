interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface ProductUpdate extends Partial<Omit<Product, "id">> {}


const updateProduct = ( id: number, productInfo: Partial<Omit<Product, "id">>) => {
    //do something
};

updateProduct(1, {
    name: "Book"
});

updateProduct(1, {
    price: 12.99,
});

updateProduct(1, {
    description: "A book about dragons",
});

updateProduct(1, {
    name: "Book",
    price: 12.99,
});

updateProduct(1, {
    name: "Book",
    description: "A book about dragons",
});