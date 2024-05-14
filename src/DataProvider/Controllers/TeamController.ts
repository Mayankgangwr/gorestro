import { IEmployee } from "../../Models";
import useService from "../Services/useService";

class TeamController {
    colleactionRef;
    constructor() {
        this.colleactionRef = useService("employees.json");
    }
    async addTeam(teamData: IEmployee) {
        try {
            return await this.colleactionRef.addDocument(teamData);
        } catch (err) {
            console.log("API service :: createTeam :: errr", err);
        }
    }
    async updateTeam(documentID: string, teamData: IEmployee) {
        try {
            return await this.colleactionRef.updateDocument(documentID, teamData);
        } catch (err) {
            console.log("API service :: updateTeam :: errr", err);
        }
    }

    async deleteTeam(documentID: string) {
        try {
            await this.colleactionRef.deleteDocument(documentID);
            return true;
        } catch (err) {
            console.log("API service :: deleteTeam :: errr", err);
            return false;
        }
    }

    async getTeams() {
        try {
            return await this.colleactionRef.getDocuments();
        } catch (err) {
            console.log("API service :: getTeams :: errr", err);
            return null;
        }
    }

    async getTeam(documentID: string) {
        try {
            return await this.colleactionRef.getDocument(documentID);
        } catch (err) {
            console.log("API service :: getTeam :: errr", err);
            return null;
        }
    }
}
const teamController = new TeamController();
export default teamController;