import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning className="bg-[#0f111a] text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}