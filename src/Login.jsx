import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'



function Login() {

  const navigate = useNavigate();


  const [usuarioLogin, setUsuarioLogin] = useState()
  const [senhaLogin, setSenhaLogin] = useState()
      

  const comparar = ()=>{

    var usuario = JSON.parse(localStorage.getItem("pessoa"))

    if(usuarioLogin == usuario.usuario){
      
      if(senhaLogin == usuario.senha){
          navigate("/menu")
      } else {alert("senha invalida")}

    } else {
      alert("usuario não existe")
    }

    
       

        
  }

      
   

  return (
    <>
      <div className='container-login'>

        <form className='form-login' action="">

            <h1 className='titulo'>Login</h1>
            <div className='container-inputs'>

              <input className='input-login' type="text" value={usuarioLogin} onChange={(e)=>setUsuarioLogin(e.target.value)} name="name" id="nome" placeholder='Usuário'/>
              <input className='input-login' type="password" value={senhaLogin} onChange={(e)=>setSenhaLogin(e.target.value)} name="password" id="senha" placeholder='Senha'/>
              <button className='botao-entrar' onClick={()=>comparar()}>Entrar</button>
              <p className='texto-informacao'>Caso ainda não tenha conta faça seu cadastro <Link className='chama-cadastro' to={"/"}>AQUI</Link></p>

            </div>

        </form>

      </div>
    </>
  )
}

export default Login
