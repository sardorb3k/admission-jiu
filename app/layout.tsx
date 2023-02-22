import Header from '@/components/header/header'
import './globals.css'
import Head from './head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html className='h-full'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body className='dark:bg-slate-900'>
        {children}
      </body>
    </html>
  )
}
