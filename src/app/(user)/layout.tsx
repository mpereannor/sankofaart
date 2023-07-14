import '../../app/globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sankofa Art Studio',
  description: 'Sankofa Art Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
       {/* <Banner/> */}
        {children}
        </body>
    </html>
  )
}
