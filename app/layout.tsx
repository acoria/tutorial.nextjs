import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/header";

/* The layout file is the wrapper element around the app
   
  - CSS, metadata etc. is defined here
  - The favicon is defined by adding a file called icon.png to the app folder
*/

//metadata constant is a reserved name to set the <head> properties
export const metadata: Metadata = {
  title: "Next.js Tutorial",
  description: "A tutorial for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
