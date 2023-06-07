import React, { Children } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentWhithChildren = ({ children }) => {
    // const childArray = Children.toArray(children);
    return (
        <ol>
            {Children.map(children, (child) => {
                // если не делать <ol> </ol>  то можно через индекс (map(children, (child, index) =>...)
                // хоть не в списке будет нумерация
                return <li>{child}</li>;
            })}
            {/* {childArray.map((child, index) => {
                return <li key={index}>{child}</li>;
            })} */}
        </ol>
    );
};

ComponentWhithChildren.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentWhithChildren>
                <Component />
                <Component />
                <Component />
            </ComponentWhithChildren>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
