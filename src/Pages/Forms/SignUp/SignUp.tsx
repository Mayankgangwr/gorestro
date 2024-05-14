import React from "react";
import Styles from "./SignUp.module.scss";
import { Form, InputField } from "../../../Components";
import validation from "../../../Utils/Validations/Validation";
interface ISignUpProps {

}
interface ISignUpState {
    name: string;
    contact: string;
    email: string;
    address: string;
    country: string;
    city: string;
    pinCode: string;

}
interface ISignUpErrorState extends ISignUpState {

}
const SignUp: React.FC<ISignUpProps> = () => {
    const [register, setRegister] = React.useState<ISignUpState>({
        name: "",
        contact: "",
        email: "",
        address: "",
        country: "",
        city: "",
        pinCode: ""
    });
    const [error, setError] = React.useState<ISignUpErrorState>({
        name: "",
        contact: "",
        email: "",
        address: "",
        country: "",
        city: "",
        pinCode: ""
    });

    const handleChange = async (value: string, name: string) => {
        let err = "";
        await validation.fieldValidation(value, name).then((res: string) => {
            err = res;
        });
        setError({ ...error, [name]: err });
        setRegister({ ...register, [name]: value });
    };


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const keys = Object.keys(register) as (keyof ISignUpState)[];
        const validationPromises = keys.map(async (key) => {
            const err = await validation.fieldValidation(register[key], key);
            setError((prevError) => ({ ...prevError, [key]: err }));
            return err;
        });
        const errors = await Promise.all(validationPromises);
        const isError = errors.some((err) => err !== "");
        if (isError) {
            return;
        }
        alert(register.name);
    };
    const hasError = (): boolean => {
        const keys = Object.keys(error) as (keyof ISignUpErrorState)[];
        return keys.some(key => register[key] === "") || keys.some(key => error[key] !== "");
    };
    return (
        <div>
            <Form onSubmit={handleSubmit} formHeader="Register Restro" buttonText="Submit" authLink="login" hasError={hasError()}>
                <InputField
                    type="text"
                    name="name"
                    label="Restro Name:"
                    className={Styles.userName}
                    value={register.name}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter restro name"
                    clearable
                    error={error.name}
                // labelOrientation="horizontal"
                />
                <InputField
                    type="text"
                    name="contact"
                    label="Contact No.:"
                    className={Styles.userName}
                    value={register.contact}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter contact no."
                    clearable
                    error={error.contact}
                // labelOrientation="horizontal"
                />
                <InputField
                    type="email"
                    name="email"
                    label="Email:"
                    className={Styles.userName}
                    value={register.email}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter email"
                    clearable
                    error={error.email}
                // labelOrientation="horizontal"
                />
                <InputField
                    type="text"
                    name="address"
                    label="Address:"
                    className={Styles.userName}
                    value={register.address}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter address"
                    clearable
                    error={error.address}
                // labelOrientation="horizontal"
                />
                <InputField
                    type="text"
                    name="country"
                    label="Country:"
                    className={Styles.userName}
                    value={register.country}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter country"
                    clearable
                    error={error.country}
                // labelOrientation="horizontal"
                />
                <InputField
                    type="text"
                    name="city"
                    label="City:"
                    className={Styles.userName}
                    value={register.city}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter city"
                    clearable
                    error={error.city}
                // labelOrientation="horizontal"
                />
                <InputField
                    type="number"
                    name="pinCode"
                    label="Pin code:"
                    className={Styles.userName}
                    value={register.pinCode}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter pin code"
                    clearable
                    error={error.pinCode}
                // labelOrientation="horizontal"
                />
            </Form>
        </div>
    );
};

export default SignUp;