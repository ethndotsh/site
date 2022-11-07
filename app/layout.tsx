import { AnalyticsWrapper } from "./components/analytics";

import "./globals.css";
import "./krona.css";
import "./inter.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/img/icon.png" />
        <meta charSet="utf-8" />
        <title>curse</title>
        <meta
          name="description"
          content="Canadian high school student creating masterpieces with the most bleeding-edge tools. Full-stack developer primarily focused on TypeScript, Next ▲ and Golang."
        />
        <meta property="og:title" content="Curse: Full-stack developer" />
        <meta
          property="og:description"
          content="Canadian high school student creating masterpieces with the most bleeding-edge tools. Full-stack developer primarily focused on TypeScript, Next ▲ and Golang."
        />
        <meta
          property="og:image"
          content="https://cursecode.me/img/banner.jpg"
        />
      </head>
      <body>
        <div className="dark">
          {children}
        </div>
        
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
