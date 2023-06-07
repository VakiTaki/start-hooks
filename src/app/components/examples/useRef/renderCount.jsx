import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toogleOtherState = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>Render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toogleOtherState}>
                ToogleOtherState
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
