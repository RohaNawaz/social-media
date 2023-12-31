'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import {SessionContextProvider} from '@supabase/auth-helpers-react'
import { useState } from 'react'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en);

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  return (
    <>
       <html lang="en">
        <SessionContextProvider 
        supabaseClient={supabaseClient}
        initialSession={children}
        >
      <body className={inter.className}>{children}</body>
      </SessionContextProvider>
       </html>
       </>   
  )
}

