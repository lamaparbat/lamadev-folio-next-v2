
import './globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import TabNavigation from '@/Components/TabNavigation';
import ContextWrapper from '@/Components/ContextWrapper';

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
        <Analytics />
        <div className='flex-center w-'>
          <ContextWrapper props={children} />
        </div>
      </body>
    </html>
  )
}
