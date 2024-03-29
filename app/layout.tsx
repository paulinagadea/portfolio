import './globals.css'
import Header from '@/components/header';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paulina Gadea | Software Dev',
  description: 'Personal portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-200 text-gray-950 h-[5000px]`}>
        <div className="bg-[#50C878] absolute top-[-6rem] -z-10 right-[11rem]
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#71BC78] absolute top-[-1rem] -z-10 left-[-35rem]
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2x1:left-[-5rem]"></div>

        <Header />
        {children}
        </body>
    </html>


  )
}
