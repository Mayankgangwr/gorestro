export interface IProduct {
    id: string;
    restroId: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    status?: boolean;
}