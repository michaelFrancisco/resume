import './globals.css'
import {Inter} from 'next/font/google'
import Providers from "./providers";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Michael Francisco - Software Developer',
    description: 'Experienced full-stack developer adept in a broad range of skills like Web development, Backend services, DevOps, and Agile project management.\n',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
