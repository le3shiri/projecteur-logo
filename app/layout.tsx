import type React from "react"
import type { Metadata } from "next"
import { Alexandria } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { CookieConsent } from "@/components/cookie-consent"
import { FloatingCTA } from "@/components/floating-cta"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const alexandria = Alexandria({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "أجهزة عرض الشعارات بتقنية LED — أضئ علامتك التجارية",
  description: "أجهزة عرض شعارات LED احترافية وقابلة للتخصيص لإضاءة هويتك البصرية",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={alexandria.className}>
      <head>
        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '680515578431305');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=680515578431305&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <FloatingCTA />
        <CookieConsent />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
