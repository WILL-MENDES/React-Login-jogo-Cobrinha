import '../style/pages/Perfil.css'
import Menu from '../componentes/Menu'

function Perfil(){


    return(
    <>

<div className='container-perfil-menu'>

    <Menu />

    <div className='perfil'>
       
       <form className='formulario-perfil'>

        <h1>Perfil</h1>
        <hr />
        <div className='dois-inputs'>
            <div className='container-input-label'>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Wilson'/>
            </div>
            <div className='container-input-label'>
                <label htmlFor="name">Sobrenome:</label>
                <input type="text" name='name' placeholder='Mendes'/>
            </div>
        </div>
        <div className='um-input'>
            <div className='email'>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name='email' placeholder='Wilson@gmail.com'/>
            </div>
        </div>
        <div className='dois-inputs'>
            <div className='container-input-label'>
                <label htmlFor="name">Telefone:</label>
                <input type="tel" name='telefone' placeholder='(00) 00000-0000'/>
            </div>
            <div className='container-input-label'>
                <label htmlFor="usuario">Usuário:</label>
                <input type="text" name='usuario' placeholder='Usuário123'/>
            </div>
        </div>
        <div className='dois-inputs'>
            <div className='container-input-label'>
                <label htmlFor="cargo">Senha:</label>
                <input type="password" name='senha' placeholder='#1234wasd'/>
            </div>
            <div className='container-input-label'>
                <label htmlFor="usuario">Confirmar Senha:</label>
                <input type="password" name='confirmar' placeholder='#1234wasd'/>
            </div>
        </div>

        <button className='botao-alterar-perfil'>Alterar</button>

       </form>
       
    </div>

</div>



    </>
    )
}

export default Perfil
