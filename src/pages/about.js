import Head from "next/head";
import Styles from '../styles/about.module.css'

export default function About(){
    return(
        <>
            <Head>
                <title>Sobre Min</title>
            </Head>
            <header id={Styles.header}>
                <h1>Tá, mas quem é Vinicius Henrique ?</h1>
            </header>
            <main id={Styles.main}>
                <div id={Styles.content}>
                    <p>Vinicius é um cara que começou a programar de verdade em 2019, antes eu já se interessava por programação, porém eu não entendia muito, com isso eu utilizava o famoso Scratch para brincar com lógica de programação.</p>
                </div>
                <div id={Styles.tags_content}>
                    <h3 id={Styles.tags_title}>Linguagens que eu uso:</h3>
                    <div id={Styles.language}>
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /></a>
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" /></a>
                        <a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white" /></a>
                    </div>
                </div>
                <div id={Styles.frameworks}>
                    <h2>Frameworks:</h2>
                    <h3>Front-End:</h3>
                        <div id={Styles.frontend}>
                            <a><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></a>
                            <a><img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/></a>
                        </div>
                    <h3>Back-End:</h3>
                        <div id={Styles.backend}>
                            <a><img src="https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white"/></a>
                        </div>
                </div>
                <div id="projects">
                    <div id={Styles.projects}>
                        <h2>Alguns projetos que eu fiz:</h2>
                        <p>*Depois irei colocar  (estou arrumando)</p>
                    </div>
                </div>
                <div id="about_page">
                    <div id={Styles.about_page}>
                        <h2>Você deve estar pensando, como este site foi feito, e onde foi hospedado ?</h2>
                        <p>Bem, o site foi feito inteiramente na framework Next.js, o site foi hospedado na Vercel.</p>
                    </div>
                </div>
            </main>
        </>
    );
};