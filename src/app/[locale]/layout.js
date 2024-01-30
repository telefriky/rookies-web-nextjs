import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Promotores from "@/components/promotores/Promotores";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Barbera Rookies',
  description: 'Home',
}

export default function RootLayout({ children,params }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <Navbar />
        <div className="container">
          {children}
          <Promotores />
        </div>
        <Footer />
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  )
}
