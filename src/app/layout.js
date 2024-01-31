import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import Promotores from '@components/promotores/Promotores';

// extrae la fuente a utilizar
const fuente = Roboto({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Barbera Rookies',
  description: 'Home',
}

export default function RootLayout({ children, params }) {
  //console.log(params)

  return (
    <html lang="es">
      <body className={fuente.className}>
        <div className="container">
          <Navbar />
          <div className="contenido">
            {children}
          </div>
          <div className="promotores">
            <Promotores />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
