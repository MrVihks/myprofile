import Styles from '../styles/navbar.module.css'
import Link from 'next/link';

export default function Navbar(){
    return(
        <>
            <div id={Styles.navbar}>
                <nav>
                    <Link href='/'><a>Inicio</a></Link>
                    <Link href='/about'><a>Sobre Mim</a></Link>
                    <Link href='/about#projects'><a>Projetos</a></Link>
                    <Link href='/about'><a>Sobre o site</a></Link>
                </nav>
            </div>
        </>
    );
};