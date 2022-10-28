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
        <link rel="shortcut icon" href="/img/icon.png" />
        <title>curse</title>
        <meta
          name="description"
          content="Canadian high school student creating masterpieces with the most bleeding-edge tools. Full-stack developer primarily focused on TypeScript, Next ▲ and Golang."
        />
      </head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
