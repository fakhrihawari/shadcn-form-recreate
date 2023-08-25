import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeToggle } from '@/components/ThemeToggle'
import { Toaster } from "@/components/ui/toaster"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster/>
      <ThemeToggle className='absolute top-6 right-6'/>
    </NextThemesProvider>
  )
}
