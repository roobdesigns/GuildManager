import './globals.css'

export const metadata = {
  title: 'Exilio Guild Manager',
  description: 'Gestor de gremio para Throne and Liberty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
// src/app/layout.tsx
<body className="min-h-full flex flex-col" suppressHydrationWarning>
  {children}
</body>
    </html>
  )
}