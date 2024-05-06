import * as React from 'react';
import { TextField, ITextFieldProps, DatePicker, IDatePickerProps, Dropdown, IDropdownProps, IDropdownOption } from '@fluentui/react';

// Define props interfaces for different input types
interface TextFieldProps extends ITextFieldProps {
    type: 'text' | 'password' | 'email' | 'number';
    onChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => void;
}

interface DatePickerProps extends IDatePickerProps {
    type: 'date';
    onChange: (date: any) => void;
}

interface DropdownProps extends IDropdownProps {
    type: 'dropdown';
    options: { key: string | number, text: string }[];
    onChange: (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) => void;
}

type IDataFieldsProps = TextFieldProps | DatePickerProps | DropdownProps;

const DataFields: React.FC<IDataFieldsProps> = (props) => {


    switch (props.type) {
        case 'date':
            const { onChange, ...datePickerProps } = props as DatePickerProps;
            return <DatePicker {...datePickerProps} onSelectDate={(date: Date | null | undefined) => onChange(date)} />;
        case 'dropdown':
            return <Dropdown {...props as DropdownProps} />;
        default:
            return <TextField {...props as TextFieldProps} />;
    }
};

export default DataFields;
