import './Menu.css'
import { ImUser, ImBarcode } from "React-icons/im";



function Menu(){


    return(
    <>

    <div className="menu">
        <p id='usuario' className='usuario'><ImUser />Usuário</p>
        <hr className='linha' />
        <div className='container-botoes-menu'>
            <button>Dashboard</button>
            <button>Categorias</button>
            <button><ImBarcode /> Produtos</button>
            <button>Profissionais</button>
            <button>Perfil</button>
        </div>
        <button className='sair'>Sair</button>
    </div>

   
    </>
    )
}

export default Menu