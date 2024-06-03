import { IProduct } from "../../Models";
import useService from "../Services/useService";

class ProductsController {
    colleactionRef;
    constructor() {
        this.colleactionRef = useService("products.json");
    }
    async addProduct(productData: IProduct) {
        try {
            return await this.colleactionRef.addDocument(productData);
        } catch (err) {
            console.log("API service :: createProduct :: errr", err);
        }
    }
    async updateProduct(documentID: string, productData: IProduct) {
        try {
            return await this.colleactionRef.updateDocument(documentID, productData);
        } catch (err) {
            console.log("API service :: updateProduct :: errr", err);
        }
    }

    async deleteProduct(documentID: string) {
        try {
            await this.colleactionRef.deleteDocument(documentID);
            return true;
        } catch (err) {
            console.log("API service :: deleteProduct :: errr", err);
            return false;
        }
    }

    async getProducts() {
        try {
            return await this.colleactionRef.getDocuments();
        } catch (err) {
            console.log("API service :: getProducts :: errr", err);
            return null;
        }
    }

    async getProduct(documentID: string) {
        try {
            return await this.colleactionRef.getDocument(documentID);
        } catch (err) {
            console.log("API service :: getProduct :: errr", err);
            return null;
        }
    }
}
const productsController = new ProductsController();
export default productsController;