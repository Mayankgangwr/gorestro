import React from "react";
import Styles from "./DataFields.module.scss";
import { Field, Input } from "@fluentui/react-components";

interface InputFieldProps {
    type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'number' | 'time' | 'week';
    label?: string;
    name: string;
    value: string | undefined;
    labelClassName?: any
    className?: any;
    setValue: (value: string, name: string) => void;
    clearValue?: () => void;
    isDisable?: boolean;
    error?: string;
    placeholder?: string;
    labelOrientation?: "horizontal" | "vertical";
}

const InputField: React.FC<InputFieldProps> = (props) => {
    const { type, name, label, value, labelClassName, className, setValue, clearValue, isDisable, error, placeholder, labelOrientation = "vertical"
    } = props;

    return (
        <Field
            label={label}
            orientation={labelOrientation}
            hint={error}
            className={`${Styles.InputField} ${labelOrientation === "horizontal" && Styles.horizontalLabelInputField} ${labelClassName}`}
        >
            <Input
                name={name}
                type={type}
                className={className}
                value={value}
                onChange={(event: any, data: { value: string }) => {
                    setValue(data.value, event.target.name)
                }}
                disabled={isDisable}
                placeholder={placeholder}
            />
        </Field>

    );


};
export default InputField;