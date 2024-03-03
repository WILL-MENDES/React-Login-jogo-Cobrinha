import { Link } from 'react-router-dom'
import './Cadastro.css'

function Cadastro(){

    return(
        <>
            <div className='container-cadastro'>

            <img className='circulo' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044297990214/circulo.png?ex=65f67ef1&is=65e409f1&hm=7c7041a06264df33ea37dff9c5c50400d481f43d040e5c9d1e9cb14d0366da7b&=&format=webp&quality=lossless&width=173&height=480" alt="circulo" />

                <form action="">

                <h1 className='titulo'>Cadastro</h1>
                <div className='container-inputs'>

                <input type="text" name="usuario" id="usuario" placeholder='Usuário' required/>
                <input type="password" name="password" id="senha" placeholder='Senha' required/>
                <input type="email" name="email" id="email" placeholder='E-mail' required/>
                <input type="text" name="nome" id='nome' placeholder='Nome do Jogador' required/>
                <button className='botao-entrar'>Cadastrar</button>
                <p className='texto-informacao'>Já tem cadastro? Faça Login <Link className='chama-cadastro' to={"/"}>AQUI</Link></p>

                </div>

                </form>

                <img className='listras' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044734320690/listras.png?ex=65f67ef2&is=65e409f2&hm=69630d6bd610bb30760ea602ea9d3020dae4c6a82250c764047c60e78ad33009&=&format=webp&quality=lossless" alt="listras" />
       
        <img className='triangulos' src="https://media.discordapp.net/attachments/1179185738013757466/1213719044520153098/triangulos.png?ex=65f67ef2&is=65e409f2&hm=bba4cd78b49d32f8dbbbd7bf0b67e14646983fbfdd31cdb68c708a2d9bb842fe&=&format=webp&quality=lossless" alt="triangulos" />

            </div>
        
        </>
    )
}

export default Cadastro