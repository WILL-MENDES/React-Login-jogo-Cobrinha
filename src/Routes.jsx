import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Menu from './Menu';

const AppRoutes = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
