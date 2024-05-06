import React from "react";
import Styles from "./SignUp.module.scss";
import { Form, InputField } from "../../../Components";
import { Button } from "@fluentui/react-components";
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
const SignUp: React.FC<ISignUpProps> = (props) => {
    const [register, setRegister] = React.useState<ISignUpState>({
        name: "",
        contact: "",
        email: "",
        address: "",
        country: "",
        city: "",
        pinCode: ""
    });

    const handleChange = (value: string, name: string) => {
        setRegister({ ...register, [name]: value });
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(register.name);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} formHeader="Register Restro" buttonText="Submit" authLink="login">
                <InputField
                    type="text"
                    name="name"
                    label="Restro Name:"
                    className={Styles.userName}
                    labelClassName={Styles.userLabel}
                    value={register.name}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter restro name"
                // labelOrientation="horizontal"
                />
                <InputField
                    type="text"
                    name="contact"
                    label="Contact No.:"
                    className={Styles.userName}
                    labelClassName={Styles.userLabel}
                    value={register.contact}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter contact no."
                // labelOrientation="horizontal"
                />
                <InputField
                    type="email"
                    name="email"
                    label="Email:"
                    className={Styles.userName}
                    labelClassName={Styles.userLabel}
                    value={register.email}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter email"
                // labelOrientation="horizontal"
                />
                <InputField
                    type="text"
                    name="address"
                    label="Address:"
                    className={Styles.userName}
                    labelClassName={Styles.userLabel}
                    value={register.address}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter address"
                // labelOrientation="horizontal"
                />
                <InputField
                    type="text"
                    name="country"
                    label="Country:"
                    className={Styles.userName}
                    labelClassName={Styles.userLabel}
                    value={register.country}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter country"
                // labelOrientation="horizontal"
                />
                <InputField
                    type="text"
                    name="city"
                    label="City:"
                    className={Styles.userName}
                    labelClassName={Styles.userLabel}
                    value={register.city}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter city"
                // labelOrientation="horizontal"
                />
                <InputField
                    type="number"
                    name="pinCode"
                    label="Pin code:"
                    className={Styles.userName}
                    labelClassName={Styles.userLabel}
                    value={register.pinCode}
                    setValue={(value: string, name: string) => handleChange(value, name)}
                    placeholder="Enter pin code"
                // labelOrientation="horizontal"
                />
            </Form>
        </div>
    );
};

export default SignUp;