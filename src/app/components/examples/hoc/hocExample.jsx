import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import whithLogin from "./withLogin";
import whithPropsStyles from "./withPropsStyles";

const HOCExample = () => {
    const ComponentWhithAuth = whithLogin(Component);
    const ComponentWhithPropsStyles = whithPropsStyles(Component);
    const NewComponent = whithPropsStyles(whithLogin(Component));
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWhithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider />
                <ComponentWhithPropsStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <Divider />
                <NewComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
