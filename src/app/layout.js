import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'

const myFont = Inter({
  subsets: ['latin'],
  weight:'400',
  variable: "--my-font-family"
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  );
}
