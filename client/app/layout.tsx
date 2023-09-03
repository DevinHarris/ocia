'use client'

import type { Metadata } from 'next'
import { ApolloProvider } from '@apollo/client'
import { Inter } from 'next/font/google'

import './globals.css'
import { client } from '@/apollo-client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OCIA - An open platform for all.',
  description: 'Sharing without limits.'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ApolloProvider client={client}>
      
      <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
      </html>
    </ApolloProvider>
  )
}
