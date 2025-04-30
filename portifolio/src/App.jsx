import perfil from './assets/perfil.jpg'
import api from './assets/api.png'
import git from './assets/git.jpg'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import mongo from './assets/mongo.jpg'
import node from './assets/node.png'
import react from './assets/react.png'
import sql from './assets/sql.png'
import startup from './assets/startup.png'
import whats from './assets/whatsapp.png'
import github from './assets/github.jpg'
import linkedin from './assets/linkedin.png'
import './App.css'

function App() {

  return (
    <>
    <header>
      <h1>MelanesDev</h1>
      <a href="https://drive.google.com/file/d/1wcE01dOSrS1bQq0rr6eHQn_saEfjHiKC/view?usp=sharing">Curriculo</a>
    </header>
    <main>
      <aside className='sobre'>
        <div className='perfil-container'>
          <img src={perfil} alt="eu" className='perfil'/>
          <h2>Olá, sou <span>Desenvolvedor fullstack junior</span></h2>
          <p>
          Desenvolvedor em formação com 8 meses de experiência prática em projetos de front-end e back-end.
          Proativo, focado em resultados e com forte capacidade de adaptação e aprendizado
          rápido. 
          Busco oportunidade para aplicar meus conhecimentos em JavaScript, React e Node.js, 
          contribuindo com soluções escaláveis e eficientes.
          </p>
        </div>
      </aside>
      <aside className='skill'>
        <div className='skills'>
          <h2>SKILLS</h2>
            <img src={html} alt="html" className='space'/>
            <img src={css} alt="css" className='space'/>
            <img src={js} alt="java script" className='space'/>
            <img src={react} alt="react" className='space' />
            <img src={node} alt="node" className='space' />
            <img src={sql} alt="MySQL" className='space'/>
            <img src={mongo} alt="mongo" className='space'/>
            <img src={api} alt="api" className='space'/>
            <img src={git} alt="git" className='space'/>
        </div>
        
        <div className='projetos'>
        <h2>PROJETOS</h2>
          <p>Estou criando uma versão propria do "Anota ai" ainda está em processo!</p>
          <img src={startup} alt="meu-projeto" className='projeto'/>
          <a href="https://www.youtube.com/watch?v=wbA2Pvm7p9w" className='img-project'>Assitir</a>
        </div>
        <div className='contato'>
        <h2>Contato</h2>
          <div className='backgrond'>
            
            <a href="https://www.linkedin.com/in/jo%C3%A3o-melanes-794a94271/"><img src={linkedin} alt="meu-linkedin" /></a>
            
            <a href="https://api.whatsapp.com/send/?phone=5521991492072&text&type=phone_number&app_absent=0"><img src={whats} alt="meu-whatsapp" /></a>
            
            <a href="https://github.com/JoaoMelanes?tab=repositories"><img src={github} alt="meu-github" /></a>
          </div>
        </div>
      </aside>
    </main>
     
    </>
  )
}

export default App
