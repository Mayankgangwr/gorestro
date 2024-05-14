import React, { FC } from "react";
import Styles from "./Form.module.scss";
import { Button } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { Flex } from "..";
import { JustifyContent } from "../Flex/Flex";


interface IFormProps {
    formHeader?: string;
    buttonText?: string
    authLink?: "login" | "signup";
    onSubmit: (event: React.FormEvent) => void;
    hasError: boolean
    children: React.ReactNode;
}
const Form: FC<IFormProps> = ({ onSubmit, formHeader, buttonText, authLink, hasError, children }) => {
    return (<div className={Styles.container}>
        <form onSubmit={onSubmit}>
            <>
                {formHeader && <h1 className={Styles.formHeader}>{formHeader}</h1>}
                {children}
                {buttonText && <Button type="submit" disabled={hasError} className={`${Styles.formButton} ${hasError && Styles.formButtonError}`}>Submit</Button>}
                {authLink && (
                    <Flex className="mt-1" justifyContent={JustifyContent.CENTER}>
                        {authLink === "login" && <span>Already have an account? <Link className={Styles.link} to='/login'>Login</Link></span>}
                        {authLink === "signup" && <span>Don't have an account? <Link className={Styles.link} to="/signup">Sign up</Link></span>}
                    </Flex>
                )}
            </>
        </form>
    </div>
    );
}
export default Form;

