import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/common/theme-provider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LinkedIn Brasil: entre ou cadastre-se",
  description: "1 bilhão de usuários | Gerencie sua identidade profissional. Crie e interaja com sua rede profissional. Aproveite o acesso a informações, estatísticas e oportunidades.",
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.svg"
  },
  authors: {
    name: "Bruno Carvalho Feitosa",
    url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
  }
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  )
}
