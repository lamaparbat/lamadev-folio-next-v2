
import './globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import type { Metadata } from 'next';

import TabNavigation from '@/Components/TabNavigation';

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
      <body className={`p-5 py-[50px]`}>
        <TabNavigation />
        <div className='flex-center'>
          {children}
        </div>
      </body>
    </html>
  )
}
