import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';


const AppRoutes = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/perfil" element={<Perfil />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
