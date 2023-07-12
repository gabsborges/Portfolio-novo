import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Gabriel Borges - Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
