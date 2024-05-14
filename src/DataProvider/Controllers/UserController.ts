import { IEmployee } from "../../Models";
import useService from "../Services/useService";

class UserController {
    colleactionRef;
    constructor() {
        this.colleactionRef = useService("users");
    }
    async addUser(userData: Partial<IEmployee>) {
        try {
            return await this.colleactionRef.addDocument(userData);
        } catch (err) {
            console.log("API service :: createUser :: errr", err);
        }
    }
    async updateUser(documentID: string, userData: Partial<IEmployee>) {
        try {
            return await this.colleactionRef.updateDocument(documentID, userData);
        } catch (err) {
            console.log("API service :: updateUser :: errr", err);
        }
    }

    async deleteUser(documentID: string) {
        try {
            await this.colleactionRef.deleteDocument(documentID);
            return true;
        } catch (err) {
            console.log("API service :: deleteUser :: errr", err);
            return false;
        }
    }

    async getUsers() {
        try {
            return await this.colleactionRef.getDocuments();
        } catch (err) {
            console.log("API service :: getUsers :: errr", err);
            return null;
        }
    }

    async getUser(documentID: string) {
        try {
            return await this.colleactionRef.getDocument(documentID);
        } catch (err) {
            console.log("API service :: getUser :: errr", err);
            return null;
        }
    }
}
const userController = new UserController();
export default userController;