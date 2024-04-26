import { Link, useNavigate } from 'react-router-dom'
import './Cadastro.css'
import { useState } from 'react'



function Cadastro(){

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()
    const [email, setEmail] = useState()
    


    const armazenar = (usuario, senha, email)=>{
      var objeto = {
        usuario:usuario,
        senha: senha,
        email: email
      }
      localStorage.setItem("pessoa",JSON.stringify(objeto)) 
      navigate("/menu")
    }

    return(
        <>
            <div className='container-cadastro'>

                <form className='form-cadastro' action="">

                <h1 className='titulo'>Cadastro</h1>
                <div className='container-inputs'>

                <input className='input-cadastro' type="text" value={usuario} onChange={(e)=>setUsuario(e.target.value)} name="usuario" id="usuario" placeholder='Usuário' required/>
                <input className='input-cadastro' type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} name="password" id="senha" placeholder='Senha' required/>
                <input className='input-cadastro' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder='E-mail' required/>
                <button className='botao-entrar' onClick={()=>armazenar(usuario,senha,email)}>Cadastrar</button>
                <p className='texto-informacao'>Já tem cadastro? Faça Login <Link className='chama-cadastro' to={"/login"}>AQUI</Link></p>

                </div>

                </form>

            </div>
        
        </>
    )
}

export default Cadastro