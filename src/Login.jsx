import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'



function Login() {

  const navigate = useNavigate();


  const [usuarioLogin, setUsuarioLogin] = useState()
  const [senhaLogin, setSenhaLogin] = useState()
      

  const comparar = ()=>{

    var usuario = localStorage.getItem("usuario")
    var senha = localStorage.getItem("senha")

    if(usuarioLogin == usuario){
      
      if(senhaLogin == senha){
          navigate("/menu")
      } else {alert("senha invalida")}

    } else {
      alert("usuario não existe")
    }

    
       

        
  }

      
   

  return (
    <>
      <div className='container-login'>

        <img className='circulo' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044297990214/circulo.png?ex=661b68f1&is=6608f3f1&hm=e4f97fed8d1409f6b140093b1b0052d7c7de9f3f94a918698a7ab77b1f34c664&=&format=webp&quality=lossless&width=243&height=673" alt="circulo" />

        <form action="">

            <h1 className='titulo'>Login</h1>
            <div className='container-inputs'>

              <input type="text" value={usuarioLogin} onChange={(e)=>setUsuarioLogin(e.target.value)} name="name" id="nome" placeholder='Usuário'/>
              <input type="password" value={senhaLogin} onChange={(e)=>setSenhaLogin(e.target.value)} name="password" id="senha" placeholder='Senha'/>
              <button className='botao-entrar' onClick={()=>comparar()}>Entrar</button>
              <p className='texto-informacao'>Caso ainda não tenha conta faça seu cadastro <Link className='chama-cadastro' to={"/"}>AQUI</Link></p>

            </div>

        </form>

        <img className='listras' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044734320690/listras.png?ex=661b68f2&is=6608f3f2&hm=3b8cc954d079c090ded6520efe406b7cbbb62b895ed7b1e9ce2c15eb21c938bd&=&format=webp&quality=lossless&width=676&height=528" alt="listras" />
       
        <img className='triangulos' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044520153098/triangulos.png?ex=661b68f2&is=6608f3f2&hm=66ac805ab5ed7144e1816811a869f3e6596518cd0c9817176a39b779152a333e&=&format=webp&quality=lossless&width=720&height=648" alt="triangulos" />
       
     
      </div>
    </>
  )
}

export default Login
