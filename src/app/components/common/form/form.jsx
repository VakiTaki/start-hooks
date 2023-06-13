import React, { useState, useEffect, Children, useCallback } from "react";
import PropTypes, { arrayOf } from "prop-types";
import { validator } from "../../../utils/validator";

function FormComponent({ children, validatorConfig, onSubmit, defaultData }) {
    const [data, setData] = useState(defaultData || {});
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            validate(data);
        }
    }, [data]);
    const handleChange = useCallback((target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate(data);
        if (!isValid) return;
        onSubmit(data);
    };
    const validate = useCallback(
        (data) => {
            const errors = validator(data, validatorConfig);
            setErrors(errors);
            return Object.keys(errors).length === 0;
        },
        [setErrors, validatorConfig]
    );
    const handleKeyDown = useCallback((event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const form = event.target.form;
            const indexField = Array.prototype.indexOf.call(form, event.target);
            form.elements[indexField + 1].focus();
        }
    }, []);
    const isValid = Object.keys(errors).length === 0;
    const clonedElements = Children.map(children, (child) => {
        const childType = typeof child.type;
        let config = {};
        if (childType === "object") {
            if (!child.props.name) {
                throw new Error("No name field", child);
            }
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name],
                onKeyDown: handleKeyDown
            };
        }
        if (childType === "string") {
            if (child.type === "button") {
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = { ...child.props, disabled: !isValid };
                }
            }
        }

        return React.cloneElement(child, config);
    });

    return <form onSubmit={handleSubmit}>{clonedElements}</form>;
}

FormComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, arrayOf(PropTypes.node)]),
    validatorConfig: PropTypes.object,
    onSubmit: PropTypes.func,
    defaultData: PropTypes.object
};
export default FormComponent;
