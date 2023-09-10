import './globals.css';
import 'animate.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TabNavigation from '@/Components/TabNavigation';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lama Dev',
  description: 'Parbat Lama Portfolio Website',
  icons: "/logo.png"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-5`}>
        <TabNavigation />
        {children}
      </body>
    </html>
  )
}
