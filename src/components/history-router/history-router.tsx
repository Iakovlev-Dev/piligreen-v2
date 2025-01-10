import {BrowserHistory} from "history";
import React, {useLayoutEffect, useState} from "react";
import {Router} from "react-router-dom";

export type THistoryProp = {
    history: BrowserHistory,
    basename?: string,
    children?: React.ReactNode,
}

export default function HistoryRouter({
        basename,
        history,
        children
    }: THistoryProp) {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    })

    useLayoutEffect(() => {
        history.listen(setState)
    }, [history]);

    return (
        <Router
            basename={basename}
            location={history.location}
            navigationType={state.action}
            navigator={history}
            >
            {children}
        </Router>
    )
}
