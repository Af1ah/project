import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/layout/navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "WebFlowMaster - Professional Website Development Services",
    template: "%s | WebFlowMaster"
  },
  description: "Professional website development services offering custom solutions for businesses. Get responsive, SEO-optimized websites with modern design.",
  keywords: ["website development", "web design", "custom websites", "responsive design", "SEO optimization", "business websites", "portfolio websites", "e-commerce websites"],
  authors: [{ name: "Muhammad Aflah" }],
  creator: "Muhammad Aflah",
  publisher: "WebFlowMaster",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://webflowmaster.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webflowmaster.vercel.app",
    title: "WebFlowMaster - Professional Website Development Services",
    description: "Professional website development services offering custom solutions for businesses. Get responsive, SEO-optimized websites with modern design.",
    siteName: "WebFlowMaster",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebFlowMaster - Professional Website Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebFlowMaster - Professional Website Development Services",
    description: "Professional website development services offering custom solutions for businesses. Get responsive, SEO-optimized websites with modern design.",
    images: ["/og-image.jpg"],
    creator: "@webflowmaster",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}