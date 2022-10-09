import Head from "next/head";
import Img from "next/image";
import Link from "next/link";
import { useEffect } from "react";


import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Henrique</title>
      </Head>
      <header id={Styles.header}>
        <div id={Styles.image_div} >
          <Img src="/images/vini.jpeg"
            width={160}
            height={214}
            alt="Minha foto"
            quality={100}
            placeholder="Carregando..."
            id={Styles.image}
          />
        </div>
        <div class="head_content">
          <div id={Styles.title} class="title">
            <h1>Vinicius Henrique</h1>
            <h4>Apenas um cara aleatório que ama programar 🤪😎.</h4>
          </div>
          <div id={Styles.buttons}>
            <a href='https://github.com/MrVihks/' target="_blank" rel="noopener noreferrer">Meu GitHub</a>
            <a href='https://www.instagram.com/mrvihks/' target="_blank" rel="noopener noreferrer">Meu Instagram</a>
          </div>
        </div>
      </header>
    </>
  )
}
