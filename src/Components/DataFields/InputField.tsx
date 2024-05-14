import React from "react";
import Styles from "./DataFields.module.scss";
import { Field, Input } from "@fluentui/react-components";
import { DismissRegular, SearchRegular } from "@fluentui/react-icons";

interface InputFieldProps {
    type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'number' | 'time' | 'week';
    label?: string;
    name: string;
    value: string | undefined;
    labelClassName?: any
    className?: any;
    setValue: (value: string, name: string) => void;
    clearable?: boolean;
    isDisable?: boolean;
    error?: string;
    placeholder?: string;
    labelOrientation?: "horizontal" | "vertical";
}

const InputField: React.FC<InputFieldProps> = (props) => {
    const { type, name, label, value, className, setValue, clearable, isDisable, error, placeholder, labelOrientation = "vertical"
    } = props;

    const clearValue = (name: string): void => {
        setValue("", name);
    }
    return (
        <Field
            label={label}
            orientation={labelOrientation}
            hint={error}
            className={`${Styles.InputField} ${labelOrientation === "horizontal" && Styles.horizontalLabelInputField} ${className}`}
        >
            <Input
                name={name}
                type={type}
                value={value}
                onChange={(event: any, data: { value: string }) => {
                    setValue(data.value, event.target.name)
                }}
                disabled={isDisable}
                placeholder={placeholder}
                contentAfter={
                    type === "search" ? (clearable && value && value?.length > 0) ? <DismissRegular onClick={() => {
                        clearValue(name)
                    }} /> :
                        <SearchRegular onClick={() => {
                            clearValue(name)
                        }} /> : (clearable && value && value?.length > 0) ? <DismissRegular onClick={() => {
                            clearValue(name)
                        }} /> : null
                }
            />
        </Field>

    );


};
export default InputField;