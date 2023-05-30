import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Anya's website",
  description: 'Hi hello hi!!!!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="#FFFFFF" data-react-helmet="true" name="theme-color" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
