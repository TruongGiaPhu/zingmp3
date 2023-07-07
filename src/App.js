import { useSelector, useDispatch } from 'react-redux';
import { Home, Login, Public } from './containers/public';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import path from './ultis/path';
import { useEffect } from 'react';
import * as actions from './store/actions';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getHome());
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={path.PUBLIC} element={<Public />}>
                        <Route path={path.HOME} element={<Home />} />
                        <Route path={path.LOGIN} element={<Login />} />

                        <Route path={path.STAR} element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
