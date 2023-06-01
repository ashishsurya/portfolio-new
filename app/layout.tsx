import "@/styles/globals.css"
import { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

import { cn } from "@/lib/utils"
import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800",],
})

export const metadata: Metadata = {
  title: "Surya Ashish",
  description: "Portfolio of Surya Ashish",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("bg-background antialiased", inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <section className={cn("")}>
              <Navbar />
              {children}
            </section>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
