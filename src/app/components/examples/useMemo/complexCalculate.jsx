import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};
const runFactorial = (n) => {
    console.log("run factorial");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [otherState, setOtherState] = useState(false);
    const toogleOtherState = () => {
        setOtherState((prevState) => !prevState);
    };
    const [value, setValue] = useState(100);
    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render");
    });

    const fact = useMemo(() => {
        runFactorial(value);
    }, [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <p>OtherState: {otherState}</p>

                <button
                    className="btn mx-2 btn-primary"
                    onClick={() => setValue((prev) => prev + 10)}
                >
                    +
                </button>
                <button
                    className="btn mx-2 btn-primary"
                    onClick={() => setValue((prev) => prev - 10)}
                >
                    -
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn mx-2 btn-" + buttonColor}
                    onClick={toogleOtherState}
                >
                    Rerender
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
