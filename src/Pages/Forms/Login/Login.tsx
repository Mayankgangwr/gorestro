import React from "react";
import Styles from "./Login.module.scss";
import { Flex, Form, InputField, Checkbox } from "../../../Components";
import { Link } from "@fluentui/react-components";

interface ILoinProps {

}
interface ILoinState {
    username: string;
    password: string;
}
const Login: React.FC<ILoinProps> = () => {
    const [user, setUser] = React.useState<ILoinState>({
        username: "",
        password: "",
    });

    const handleChange = (value: string, name: string) => {
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(user.username);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} formHeader="Login" buttonText="Login" authLink="signup">
                <InputField
                    type="text"
                    name="username"
                    label="Username:"
                    className={Styles.inputField}
                    labelClassName={Styles.userLabel}
                    value={user.username}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter username"
                    clearable
                // labelOrientation="horizontal"
                />
                <InputField
                    type="password"
                    name="password"
                    label="Password:"
                    className={Styles.inputField}
                    labelClassName={Styles.userLabel}
                    value={user.password}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter password"
                    clearable
                // labelOrientation="horizontal"
                />
                <Flex className="mt-4">
                    <Checkbox label={`Remember me`} labelPosition="after" setValue={(value: string, name: string) => { }} />
                    <Link className={Styles.link} href={'/forgotpassword'}>Forgot password?</Link>
                </Flex>
            </Form>
        </div>
    );
};

export default Login;