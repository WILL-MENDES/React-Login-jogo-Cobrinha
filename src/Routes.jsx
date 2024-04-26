import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Perfil from './Perfil';
import Menu from './Menu';

const AppRoutes = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/perfil" element={<Perfil />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
