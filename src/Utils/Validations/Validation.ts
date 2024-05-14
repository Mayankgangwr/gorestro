class Validation {

    async fieldValidation(value: string, fieldName: string): Promise<string> {
        let error: string = "";
        switch (fieldName) {
            case 'password':
                const specialCharacterRegex: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
                if (value.length < 8 || value.length > 20 || !specialCharacterRegex.test(value)) {
                    error = "Password must be between 8 and 20 characters and contain at least one special character";
                }
                break;
            case 'name':
                if (value.trim() === "") {
                    error = "Restro Name is required";
                } else if (value.length < 3 || value.length > 100) {
                    error = "Restro name must be between 3 and 100 characters";
                }
                break;
            case 'username':
                if (value.trim() === "") {
                    error = "Userame is required";
                } else if (value.length < 3 || value.length > 100) {
                    error = "Userame must be between 3 and 100 characters";
                }
                break;
            case 'contact':
                if (value.trim() === "") {
                    error = "Contact No. is required";
                } else if (!/^\+\d+$/.test(value)) {
                    error = "Contact must start with + and country code";
                }
                
                break;
            case 'email':
                if (value.trim() === "") {
                    error = "Email is required";
                } else if (!/^\S+@\S+\.\S+$/.test(value)) {
                    error = "Enter a valid email";
                }
                break;
            case 'address':
                if (value.trim() === "") {
                    error = "Address is required";
                } else if (value.length < 15 || value.length > 200) {
                    error = "Address must be between 15 and 200 characters";
                }
                break;
            case 'country':
                if (value.trim() === "") {
                    error = "Country is required";
                } else if (value.length < 3 || value.length > 100) {
                    error = "Country name must be between 3 and 100 characters";
                }
                break;
            case 'city':
                if (value.trim() === "") {
                    error = "City is required";
                } else if (value.length < 3 || value.length > 100) {
                    error = "City name must be between 3 and 100 characters";
                }
                break;
            case 'pinCode':
                if (value.trim() === "" || !/^\d+$/.test(value)) {
                    error = "Pin code is required";
                } else if (value.length < 6) {
                    error = "Pin code  must have 6 characters";
                }
                break;
            default:
                break;
        }
        return error;
    }
}

const validation = new Validation();
export default validation;
