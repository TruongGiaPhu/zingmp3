import { useSelector, useDispatch } from 'react-redux/es/hooks/useSelector';
import { Home, Login, Public } from './containers/public';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import path from './ultis/path';

function App() {
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
