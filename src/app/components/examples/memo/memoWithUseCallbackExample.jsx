import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
function isEqual(prevSatte, nextState) {
    if (prevSatte.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}
const MemorizeLogOut = React.memo(LogOutButton, isEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogout = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            {state.toString()}
            <MemorizeLogOut onLogOut={handleLogout} />
            <button
                className="btn btn-primary"
                onClick={() => setState((prev) => !prev)}
            >
                Init Rerender
            </button>
        </>
    );
};

export default MemoWithUseCallbackExample;
