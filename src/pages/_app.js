import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Navbar/>
        <div id="container">
          <Component {...pageProps} />
        </div>
        <Footer />
    </>
  )
}

export default MyApp
