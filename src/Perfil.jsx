import './Perfil.css'
import Menu from './Menu'

function Perfil(){


    return(
    <>

<div className='container-perfil-menu'>

    <Menu />

    <div className='perfil'>
       
       <form className='formulario-perfil'>

        
        <div className='dois-inputs'>
            <div className='container-input-label'>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name'/>
            </div>
            <div className='container-input-label'>
                <label htmlFor="name">Sobrenome:</label>
                <input type="text" name='name'/>
            </div>
        </div>
        <div className='dois-inputs'>
            <div className='container-input-label'>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name='email'/>
            </div>
            <div className='container-input-label'>
                <label htmlFor="name">Telefone:</label>
                <input type="tel" name='telefone'/>
            </div>
        </div>
        <div className='dois-inputs'>
            <div className='container-input-label'>
                <label htmlFor="cargo">Cargo:</label>
                <input type="text" name='cargo'/>
            </div>
            <div className='container-input-label'>
                <label htmlFor="usuario">Usuário:</label>
                <input type="text" name='usuario'/>
            </div>
        </div>
        <div className='dois-inputs'>
            <div className='container-input-label'>
                <label htmlFor="cargo">Senha:</label>
                <input type="password" name='senha'/>
            </div>
            <div className='container-input-label'>
                <label htmlFor="usuario">Confirmar Senha:</label>
                <input type="password" name='confirmar'/>
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
