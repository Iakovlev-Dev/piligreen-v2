import HistoryRouter from "../history-router/history-router.tsx";
import {browserHistory} from "../../browser-history.ts";
import {Route, Routes} from "react-router-dom";
import {AppRote} from "../../const.ts";
import PageMain from "../../pages/page-main/page-main.tsx";

export default function App () {
    return (
        <HistoryRouter history={browserHistory}>
            <Routes>
                <Route
                    path={AppRote.Main}
                    element={<PageMain />}
                />
            </Routes>
        </HistoryRouter>
    )
}
