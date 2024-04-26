import { useState, useEffect } from 'react';
import './Menu.css'
import { ImUser,  ImExit } from "React-icons/im";
import { MdDashboard } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";



function Menu(){

    const [usuario, setUsuario] = useState()


    useEffect(() => {
        const storedUsuario = JSON.parse(localStorage.getItem("pessoa"));
        if (storedUsuario.usuario) {
          setUsuario(storedUsuario.usuario);
        }
      }, [])


    return(
    <>

    <div className="menu">
        <p id='usuario' className='usuario'><ImUser />{usuario}</p>
        <hr className='linha' />
        <div className='container-botoes-menu'>
            <button><MdDashboard />Dashboard</button>
            <button><BiSolidCategoryAlt />Categorias</button>
            <button><BsCart /> Produtos</button>
            <button><FaUsers />Profissionais</button>
            <button><FaUserCircle />Perfil</button>
        </div>
        <button className='sair'><ImExit />Sair</button>
    </div>

   
    </>
    )
}

export default Menu