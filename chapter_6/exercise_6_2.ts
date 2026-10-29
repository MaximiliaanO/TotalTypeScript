interface withId {
  id: string;
}

interface withCreatedAt {
  createdAt: Date;
}

interface User extends withId, withCreatedAt {
  name: string;
  email: string;
}

interface Product extends withId, withCreatedAt {
  name: string;
  price: number;
}
