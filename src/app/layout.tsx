import './globals.css';
import 'react-tooltip/dist/react-tooltip.css';

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
      <body className={`${inter.className} p-5 py-[100px]`}>
        <TabNavigation />
        <div className='flex-center'>
          <div className='flex-center w-[550px]'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
