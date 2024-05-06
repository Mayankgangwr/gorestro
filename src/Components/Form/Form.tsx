import React, { FC } from "react";
import Styles from "./Form.module.scss";
import { Button, Link } from "@fluentui/react-components";
import { Flex } from "..";


interface IFormProps {
    formHeader?: string;
    buttonText?: string
    authLink?: "login" | "signup";
    onSubmit: (event: React.FormEvent) => void;
    children: React.ReactNode;
}
const Form: FC<IFormProps> = ({ onSubmit, formHeader, buttonText, authLink, children }) => {
    return (<div className={Styles.container}>
        <form onSubmit={onSubmit}>
            <>
                {formHeader && <h1 className={Styles.formHeader}>{formHeader}</h1>}
                {children}
                {buttonText && <Button type="submit" className={Styles.formButton}>Submit</Button>}
                {authLink && (
                    <Flex className="mt-1" justifyContent="center">
                        {authLink === "login" && <span>Already have an account? <Link className={Styles.link} href='/login'>Login</Link></span>}
                        {authLink === "signup" && <span>Don't have an account? <Link className={Styles.link} href="/signup">Sign up</Link></span>}
                    </Flex>
                )}

            </>
        </form>
    </div>
    );
}
export default Form;

