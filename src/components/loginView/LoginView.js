import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SingIn from '../singIn/SingIn';
import SingUp from '../singUp/SingUp';
import Main from '../main/Main';

const LoginView = () => {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<Main />}>
                        <Route index element={<SingIn />} />
                        <Route path="singUp" element={<SingUp />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default LoginView;