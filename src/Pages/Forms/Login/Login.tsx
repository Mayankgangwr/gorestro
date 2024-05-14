import React from "react";
import Styles from "./Login.module.scss";
import { Flex, Form, InputField, Checkbox } from "../../../Components";
import { Link } from "react-router-dom";
import validation from "../../../Utils/Validations/Validation";


interface ILoginProps {

}
interface ILoginState {
    username: string;
    password: string;
}
const Login: React.FC<ILoginProps> = () => {
    const [user, setUser] = React.useState<ILoginState>({
        username: "",
        password: "",
    });
    const [error, setErorr] = React.useState<ILoginState>({
        username: "",
        password: "",
    });

    const handleChange = async (value: string, name: string) => {
        let err = "";
        await validation.fieldValidation(value, name).then((res: string) => {
            err = res;
        });
        setErorr({ ...error, [name]: err });
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        debugger;
        const keys = Object.keys(error) as (keyof ILoginState)[];

        const validationPromises = keys.map(async (key) => {
            const err = await validation.fieldValidation(user[key], key);
            setErorr((prevError) => ({ ...prevError, [key]: err }));
            return err;
        });
        const errors = await Promise.all(validationPromises);
        const isError = errors.some((err) => err !== "");
        if (isError) {
            return;
        }
        alert(user.username);
    };



    const hasError = (): boolean => {
        const keys = Object.keys(error) as (keyof ILoginState)[];
        return keys.some(key => user[key] === "") || keys.some(key => error[key] !== "");
    };
    console.log(error.username)
    return (
        <div>
            <Form onSubmit={handleSubmit} formHeader="Login" buttonText="Login" authLink="signup" hasError={hasError()}>
                <InputField
                    type="text"
                    name="username"
                    label="Username:"
                    className={Styles.inputField}
                    value={user.username}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter username"
                    clearable
                    error={error.username}
                // labelOrientation="horizontal"
                />
                <InputField
                    type="password"
                    name="password"
                    label="Password:"
                    className={Styles.inputField}
                    value={user.password}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter password"
                    clearable
                    error={error.password}
                // labelOrientation="horizontal"
                />
                <Flex className="mt-4">
                    <Checkbox label={`Remember me`} labelPosition="after" setValue={(value: string, name: string) => {
                        console.log(value, name);
                    }} />
                    <Link className={Styles.link} to={'/forgotpassword'}>Forgot password?</Link>
                </Flex>
            </Form>
        </div>
    );
};

export default Login;