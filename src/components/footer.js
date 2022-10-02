import Styles from '../styles/footer.module.css'

export default function Footer(){
    return(
        <>
            <div id={Styles.footer}>
                <p>Site feito por: Vinicius Henrique 🤗.</p>
                <a href="https://vercel.com/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
            </div>
        </>
    );
};