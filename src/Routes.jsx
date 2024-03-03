import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';

const AppRoutes = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
