import type { Metadata } from 'next'
import '../styles/globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'MD Shoriful Alam Robin — Full Stack Developer & Data Analyst',
  description:
    'Full Stack Developer, Data Analyst & Digital Marketer based in Sylhet, Bangladesh. Turning raw data into insights using React, Power BI, SQL, and JavaScript.',
  keywords: [
    'Full Stack Developer Bangladesh',
    'Data Analyst Sylhet',
    'React Developer',
    'Power BI Dashboard',
    'Chancenkarte Germany',
    'Digital Marketer',
  ],
  authors: [{ name: 'MD Shoriful Alam Robin', url: 'https://shorifulrobin.me' }],
  openGraph: {
    title: 'MD Shoriful Alam Robin — Full Stack Developer & Data Analyst',
    description: 'Turning raw data into insights. React · Power BI · SQL · JavaScript.',
    url: 'https://shorifulrobin.me',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/robin-favicon.png" />
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'MD Shoriful Alam Robin',
              url: 'https://shorifulrobin.me',
              jobTitle: 'Full Stack Developer & Data Analyst',
              sameAs: [
                'https://www.linkedin.com/in/md-shoriful-alam-robin',
                'https://github.com/md-shoriful-alam-robin',
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
