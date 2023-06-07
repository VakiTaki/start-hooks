import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallbackCount = useRef(0);
    const withCallbackCount = useRef(0);

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);
    useEffect(() => {
        withoutCallbackCount.current++;
    }, [validateWithoutCallback]);
    useEffect(() => {
        withCallbackCount.current++;
    }, [validateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Rende WOCallback: {withoutCallbackCount.current}</p>
            <p>Rende WCallback: {withCallbackCount.current}</p>

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
