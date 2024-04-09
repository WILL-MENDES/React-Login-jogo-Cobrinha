import { Link, useNavigate } from 'react-router-dom'
import './Cadastro.css'
import { useState } from 'react'



function Cadastro(){

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()
    const [jogador, setJogador] = useState()


    const armazenar = (usuario, senha, jogador)=>{
      var objeto = {
        usuario:usuario,
        senha: senha,
        jogador: jogador
      }
      localStorage.setItem("pessoa",JSON.stringify(objeto)) 
      navigate("/menu")
    }

    return(
        <>
            <div className='container-cadastro'>

            <img className='circulo' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044297990214/circulo.png?ex=661b68f1&is=6608f3f1&hm=e4f97fed8d1409f6b140093b1b0052d7c7de9f3f94a918698a7ab77b1f34c664&=&format=webp&quality=lossless&width=243&height=673" alt="circulo" />

                <form action="">

                <h1 className='titulo'>Cadastro</h1>
                <div className='container-inputs'>

                <input type="text" value={usuario} onChange={(e)=>setUsuario(e.target.value)} name="usuario" id="usuario" placeholder='Usuário' required/>
                <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)} name="password" id="senha" placeholder='Senha' required/>
                <input type="email" name="email" id="email" placeholder='E-mail' required/>
                <input type="text" value={jogador} onChange={(e)=>setJogador(e.target.value)} name="nome" id='nome' placeholder='Nome do Jogador' required/>
                <button className='botao-entrar' onClick={()=>armazenar(usuario,senha,jogador)}>Cadastrar</button>
                <p className='texto-informacao'>Já tem cadastro? Faça Login <Link className='chama-cadastro' to={"/login"}>AQUI</Link></p>

                </div>

                </form>

                <img className='listras' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044734320690/listras.png?ex=661b68f2&is=6608f3f2&hm=3b8cc954d079c090ded6520efe406b7cbbb62b895ed7b1e9ce2c15eb21c938bd&=&format=webp&quality=lossless&width=676&height=528" alt="listras" />
       
        <img className='triangulos' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044520153098/triangulos.png?ex=661b68f2&is=6608f3f2&hm=66ac805ab5ed7144e1816811a869f3e6596518cd0c9817176a39b779152a333e&=&format=webp&quality=lossless&width=720&height=648" alt="triangulos" />

            </div>
        
        </>
    )
}

export default Cadastro