/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

import { Field } from "formik";
import Input from "./input";


function InputProp(props) {
    const {
        suffixIcon,
        prefixIcon,
        
        name,
        type,
        enablereinitialize,
        onClick,
        disabled,
    } = props;

    return (
        <Field name={name}>
            {({ field, meta: { touched, error },form
				}) => (
                <div
                    className={`flex flex-col w-full  ${
                        form.touched && form.error
                            ? "border-red"
                            : ""
                    } `}
                >
                    <Input
                        {...field}
                        {...props}
                        prefixIcon={prefixIcon}
                        suffixIcon={suffixIcon}
                        onClick={onClick}
                        className={`h-14 flex items-center w-full  ${
                            disabled ? "cursor-not-allowed" : ""
                        } `}
                        type={type}
                        error={form.touched && form.errors}
                        enablereinitialize={enablereinitialize}
                        
                    />
                    {touched && error && (
                        <div className="text-red my-2 text-xs">{error}</div>
                    )}
                </div>
            )}
        </Field>
    );
}

function TextAreaProp(props) {
    const { wrapperClassName, name, onClick, disabled } = props

    return (
        <Field name={name}>
            {({ field, meta: { touched, error }}) => (
                <div>
                    <div
                        className={`flex flex-col w-full border border-black-10  rounded-[10px]  h-40 px-2 ${
                            wrapperClassName
                        } ${
                            touched &&
                            error
                                ? "border-red-100"
                                : ""
                        } `}
                    >
                        <textarea
                            {...field}
                            {...props}
                            onClick={onClick}
                            className={`bg-white-100 h-40 flex items-center placeholder:bg-black-60 outline-none w-full pt-2  ${
                                disabled ? "bg-black-20 cursor-not-allowed" : ""
                            } `}
                            
                            error={
                                touched&&
                                error
                            }
                            rows={5}
                        />
                    </div>
                    {touched && error && (
                        <div className="text-red items-center text-xs ">
                            {error}
                        </div>
                    )}
                </div>
            )}
        </Field>
    )
}

function SelectInput(props) {
    const { className, name, children, ...rest } = props;

    return (
        <Field name={name}>
            {({ field, meta: { touched, error }}) => (
                <div className={`flex flex-col ${className} `}>
                    <select
                        {...field}
                        {...props}
                        {...rest}
                        className={`border-solid border border-neutral-10  p-4 rounded w-full outline-none ${className}  bg-red 
                             ${touched && error ? "border border-red" : ""}`}
                    >
                        {children}
                    </select>
                    {touched && error && (
                        <div className="text-red my-2 text-xs">{error}</div>
                    )}
                </div>
            )}
        </Field>
    );
}

export default function FormikControls({ control, ...rest }) {
    switch (control) {
        case "input":
            return <InputProp  {...rest} />;
        case "textarea":
            return <TextAreaProp control="select" {...rest} />
        case "select":
            return <SelectInput {...rest} />;
        default:
            return null;
    }
}
